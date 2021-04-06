import { BreadCrumb, ExceptionOptions, MessageOptions, SentryInitOptions, User } from './';
export class Sentry {
  public static init(dsn: string) {
    this.initWithOptions({dsn});
  }

  public static initWithOptions(options: SentryInitOptions) {
    const sentryOptions = new io.sentry.SentryOptions();
    sentryOptions.setDsn(options.dsn);
    if (options.environment) sentryOptions.setEnvironment(options.environment);
    if (options.release) sentryOptions.setRelease(options.release);

    io.sentry.Sentry.init(sentryOptions);
  }

  public static captureMessage(message: string, options?: MessageOptions) {
    // Create event
    const event = new io.sentry.SentryEvent();

    // Set level
    const level = options && options.level ? options.level : null;
    event.setLevel(this._convertSentryEventLevel(level));

    // Set message
    const msg = new io.sentry.protocol.Message();
    msg.setMessage(message);
    event.setMessage(msg);

    // Set extras
    if (options && options.extra) {
      Object.keys(options.extra).forEach(key => {
        const nativeDataValue = Sentry._convertDataTypeToString(options.extra[key]);
        event.setExtra(key, nativeDataValue);
      });
    }

    // Set tags
    if (options && options.tags) {
      // tags are required as strings
      Object.keys(options.tags).forEach(key => {
        event.setTag(key, options.tags[key].toString());
      });
    }

    // Send event
    io.sentry.Sentry.captureEvent(event);
  }

  public static captureException(exception: Error, options?: ExceptionOptions) {
    // TODO: attach tags and extra directly on the exeption
    if (options && options.extra) {
      this.setExtras(options.extra);
    }

    if (options && options.tags) {
      this.setTags(options.tags);
    }

    const cause = new java.lang.Throwable(exception.stack);

    // creating a new Exception to send to Sentry which will include the
    // JS Error stacktrace as the "cause" and the JS Error message as the Throwable "message"
    // https://developer.android.com/reference/java/lang/Exception.html#Exception(java.lang.String,%20java.lang.Throwable)
    const ex = new java.lang.Exception(exception.message, cause);
    io.sentry.Sentry.captureException(ex);
  }

  public static captureBreadcrumb(breadcrumb: BreadCrumb) {
    // Create BreadCrumb
    const nativeBreadCrumb = new io.sentry.Breadcrumb();
    nativeBreadCrumb.setLevel(this._convertSentryEventLevel(breadcrumb.level));
    nativeBreadCrumb.setCategory(breadcrumb.category);
    nativeBreadCrumb.setMessage(breadcrumb.message);

    // Add BreadCrumb
    io.sentry.Sentry.addBreadcrumb(nativeBreadCrumb);
  }

  public static setUser(user: User) {
    // handle the data object if provided
    let nativeMapObject: java.util.HashMap<any, any>;
    if (user.data) {
      nativeMapObject = new java.util.HashMap<any, any>();
      Object.keys(user.data).forEach(key => {
        const nativeDataValue = Sentry._convertDataTypeToString(user.data[key]);
        nativeMapObject.put(key, nativeDataValue);
      });
    }

    const nativeUser = new io.sentry.protocol.User();
    nativeUser.setId(user.id);
    nativeUser.setEmail(user.email ? user.email : '');
    nativeUser.setUsername(user.username ? user.username : '');
    if (nativeMapObject) {
      nativeUser.setOthers(nativeMapObject);
    }
    io.sentry.Sentry.setUser(nativeUser);
  }

  public static setContextUser(user: User) {
    this.setUser(user);
  }

  public static setTags(tags: object) {
    Object.keys(tags).forEach(key => {
      io.sentry.Sentry.setTag(key, tags[key].toString());
    });
  }

  public static setContextTags(tags: object) {
    this.setTags(tags);
  }

  public static setExtras(extras: object) {
    Object.keys(extras).forEach(key => {
      // adding type check to not force toString on the extra
      const nativeDataValue = Sentry._convertDataTypeToString(extras[key]);
      io.sentry.Sentry.setExtra(key, nativeDataValue);
    });
  }

  public static setContextExtra(extra: object) {
    this.setExtras(extra);
  }

  public static clearContext() {
    const scopeCallBack = new io.sentry.ScopeCallback({
      run: (scope) => {
        scope.clear();
      }
    });

    io.sentry.Sentry.configureScope(scopeCallBack);
  }

  /**
   * Returns the android Sentry Level for the provided TNS_SentryLevel
   * @default - INFO
   */
  private static _convertSentryEventLevel(level: Level) {
    switch (level) {
      case Level.Info:
        return io.sentry.SentryLevel.INFO;
      case Level.Warning:
        return io.sentry.SentryLevel.WARNING;
      case Level.Fatal:
        return io.sentry.SentryLevel.FATAL;
      case Level.Error:
        return io.sentry.SentryLevel.ERROR;
      case Level.Debug:
        return io.sentry.SentryLevel.DEBUG;
      default:
        return io.sentry.SentryLevel.INFO;
    }
  }

  /**
   * Takes the provided value and checks for boolean, number or object and converts it to string.
   * @param value
   */
  private static _convertDataTypeToString(value: any): string {
    if (value === undefined || value === null) {
      return 'null';
    }

    switch (typeof value) {
      case 'object':
        if (value instanceof Date) {
          return value.toISOString();
        }

        if (Array.isArray(value)) {
          const list = [];
          value.forEach(data => {
            list.push(this._convertDataTypeToString(data));
          });
          return JSON.stringify(list, null, 2);
        }

        const object = {};
        Object.keys(value).forEach(itemKey => {
          object[itemKey] = this._convertDataTypeToString(value[itemKey]);
        });

        return JSON.stringify(object, null, 2);
      case 'number':
        return value.toString();
      case 'boolean':
        return value ? 'true' : 'false';
    }

    return value;
  }
}

export enum Level {
  Fatal = 'fatal',
  Error = 'error',
  Warning = 'warning',
  Info = 'info',
  Debug = 'debug'
}

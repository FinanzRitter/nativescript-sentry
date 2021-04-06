import { BreadCrumb, ExceptionOptions, MessageOptions, SentryInitOptions, User } from './';

export class Sentry {
  public static init(dsn: string) {
    this.initWithOptions({dsn});
  }

  public static initWithOptions(options: SentryInitOptions) {
    const dict = NSDictionary.dictionaryWithDictionary(options as any as NSDictionary<string, any>);
    const sentryOptions = SentryOptions.alloc().initWithDictDidFailWithError(dict);
    SentrySDK.startWithOptionsObject(sentryOptions);
  }

  public static captureMessage(message: string, options?: MessageOptions) {
    const level = options && options.level ? options.level : null;

    const event = SentryEvent.alloc().initWithLevel(this._convertSentryLevel(level));

    event.message = SentryMessage.alloc().initWithFormatted(message);

    if (options && options.extra) {
      event.extra = NSDictionary.dictionaryWithDictionary(options.extra as NSDictionary<string, any>);
    }

    if (options && options.tags) {
      event.tags = NSDictionary.dictionaryWithDictionary(options.tags as NSDictionary<string, string>);
    }

    SentrySDK.captureEvent(event);
  }

  public static captureException(exception: Error, options?: ExceptionOptions) {
    const event = SentryEvent.alloc().initWithLevel(SentryLevel.kSentryLevelError);

    // create a string of the entire Error for sentry to display as much info as possible
    event.message = SentryMessage.alloc().initWithFormatted(JSON.stringify({
      message: exception.message,
      stacktrace: exception.stack,
      name: exception.name
    }));

    if (options && options.extra) {
      event.extra = NSDictionary.alloc<string, any>().initWithDictionary(options.extra as any);
    }

    if (options && options.tags) {
      event.tags = NSDictionary.alloc<string, any>().initWithDictionary(options.tags as any);
    }

    SentrySDK.captureEvent(event);
  }

  public static captureBreadcrumb(breadcrumb: BreadCrumb) {
    // create the iOS SentryBreadCrumb
    const sentryBC = SentryBreadcrumb.alloc().initWithLevelCategory(
      this._convertSentryLevel(breadcrumb.level),
      breadcrumb.category
    );
    sentryBC.message = breadcrumb.message;
    SentrySDK.addBreadcrumb(sentryBC);
  }

  public static setUser(user: User) {
    const userNative = SentryUser.alloc().initWithUserId(user.id);
    userNative.email = user.email ? user.email : '';
    userNative.username = user.username ? user.username : '';
    if (user.data) {
      const dict = NSDictionary.alloc<string, any>().initWithDictionary(user.data as any);
      userNative.data = dict;
    }
    SentrySDK.setUser(userNative);
  }

  public static setContextUser(user: User) {
    this.setUser(user);
  }

  public static setTags(tags: any) {
    SentrySDK.configureScope((scope) => {
      scope.setTags(NSDictionary.dictionaryWithDictionary(tags as NSDictionary<string, string>));
    });
  }

  public static setContextTags(tags: any) {
    this.setTags(tags);
  }

  public static setExtras(extra: any) {
    SentrySDK.configureScope((scope) => {
      scope.setExtras(NSDictionary.dictionaryWithDictionary(extra as NSDictionary<string, any>));
    });
  }

  public static setContextExtra(extra: any) {
    this.setExtras(extra);
  }

  public static clearContext() {
    SentrySDK.configureScope((scope) => {
      scope.clear();
    });
  }

  /**
   * Returns the ios Sentry Level for the provided TNS_SentryLevel
   * @default - INFO
   */
  private static _convertSentryLevel(level: Level) {
    switch (level) {
      case Level.Info:
        return SentryLevel.kSentryLevelInfo;
      case Level.Warning:
        return SentryLevel.kSentryLevelWarning;
      case Level.Fatal:
        return SentryLevel.kSentryLevelFatal;
      case Level.Error:
        return SentryLevel.kSentryLevelError;
      case Level.Debug:
        return SentryLevel.kSentryLevelDebug;
      default:
        return SentryLevel.kSentryLevelInfo;
    }
  }
}

export enum Level {
  Fatal = 'fatal',
  Error = 'error',
  Warning = 'warning',
  Info = 'info',
  Debug = 'debug'
}

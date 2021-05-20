import { BreadCrumb, ExceptionOptions, MessageOptions, SentryInitOptions, User } from './';
export declare class Sentry {
    static init(dsn: string): void;
    static initWithOptions(options: SentryInitOptions): void;
    static captureMessage(message: string, options?: MessageOptions): void;
    static captureException(exception: Error, options?: ExceptionOptions): void;
    static captureBreadcrumb(breadcrumb: BreadCrumb): void;
    static setUser(user: User): void;
    static setContextUser(user: User): void;
    static setTags(tags: object): void;
    static setContextTags(tags: object): void;
    static setExtras(extras: object): void;
    static setContextExtra(extra: object): void;
    static clearContext(): void;
    private static _convertSentryEventLevel;
    private static _convertDataTypeToString;
}
export declare enum Level {
    Fatal = "fatal",
    Error = "error",
    Warning = "warning",
    Info = "info",
    Debug = "debug"
}

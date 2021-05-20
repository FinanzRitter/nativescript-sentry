import { BreadCrumb, ExceptionOptions, MessageOptions, SentryInitOptions, User } from './';
export declare class Sentry {
    static init(dsn: string): void;
    static initWithOptions(options: SentryInitOptions): void;
    static captureMessage(message: string, options?: MessageOptions): void;
    static captureException(exception: Error, options?: ExceptionOptions): void;
    static captureBreadcrumb(breadcrumb: BreadCrumb): void;
    static setUser(user: User): void;
    static setContextUser(user: User): void;
    static setTags(tags: any): void;
    static setContextTags(tags: any): void;
    static setExtras(extra: any): void;
    static setContextExtra(extra: any): void;
    static clearContext(): void;
    private static _convertSentryLevel;
}
export declare enum Level {
    Fatal = "fatal",
    Error = "error",
    Warning = "warning",
    Info = "info",
    Debug = "debug"
}

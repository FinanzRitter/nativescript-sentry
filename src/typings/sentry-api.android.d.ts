/// <reference path="android-declarations.d.ts"/>

declare module io {
	export module sentry {
		export class AsyncHttpTransportFactory extends io.sentry.ITransportFactory {
			public static class: java.lang.Class<io.sentry.AsyncHttpTransportFactory>;
			public constructor();
			public create(param0: io.sentry.SentryOptions, param1: io.sentry.RequestDetails): io.sentry.transport.ITransport;
		}
	}
}

declare module io {
	export module sentry {
		export class Attachment {
			public static class: java.lang.Class<io.sentry.Attachment>;
			public constructor(param0: string, param1: string);
			public getBytes(): androidNative.Array<number>;
			public constructor(param0: androidNative.Array<number>, param1: string);
			public getFilename(): string;
			public constructor(param0: androidNative.Array<number>, param1: string, param2: string);
			public getPathname(): string;
			public constructor(param0: androidNative.Array<number>, param1: string, param2: string, param3: boolean);
			public constructor(param0: string, param1: string, param2: string);
			public getContentType(): string;
			public constructor(param0: string, param1: string, param2: string, param3: boolean);
			public constructor(param0: string);
		}
	}
}

declare module io {
	export module sentry {
		export class Breadcrumb extends io.sentry.IUnknownPropertiesConsumer {
			public static class: java.lang.Class<io.sentry.Breadcrumb>;
			public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
			public removeData(param0: string): void;
			public clone(): io.sentry.Breadcrumb;
			public constructor();
			public getData(param0: string): any;
			public getMessage(): string;
			public setMessage(param0: string): void;
			public getData(): java.util.Map<string,any>;
			public setType(param0: string): void;
			public getLevel(): io.sentry.SentryLevel;
			public getTimestamp(): java.util.Date;
			public setData(param0: string, param1: any): void;
			public setLevel(param0: io.sentry.SentryLevel): void;
			public constructor(param0: java.util.Date);
			public setCategory(param0: string): void;
			public static http(param0: string, param1: string): io.sentry.Breadcrumb;
			public getType(): string;
			public constructor(param0: string);
			public getCategory(): string;
		}
	}
}

declare module io {
	export module sentry {
		export class BuildConfig {
			public static class: java.lang.Class<io.sentry.BuildConfig>;
			public static SENTRY_JAVA_SDK_NAME: string;
			public static VERSION_NAME: string;
		}
	}
}

declare module io {
	export module sentry {
		export class CircularFifoQueue<E>  extends java.util.AbstractCollection<any> {
			public static class: java.lang.Class<io.sentry.CircularFifoQueue<any>>;
			public isFull(): boolean;
			public clear(): void;
			public size(): number;
			public isEmpty(): boolean;
			public poll(): any;
			public isAtFullCapacity(): boolean;
			public constructor();
			public constructor(param0: java.util.Collection<any>);
			public maxSize(): number;
			public peek(): any;
			public offer(param0: any): boolean;
			public remove(): any;
			public add(param0: any): boolean;
			public get(param0: number): any;
			public element(): any;
			public iterator(): java.util.Iterator<any>;
		}
	}
}

declare module io {
	export module sentry {
		export class CustomSamplingContext {
			public static class: java.lang.Class<io.sentry.CustomSamplingContext>;
			public set(param0: string, param1: any): void;
			public get(param0: string): any;
			public getData(): java.util.Map<string,any>;
			public constructor();
		}
	}
}

declare module io {
	export module sentry {
		export class DateUtils {
			public static class: java.lang.Class<io.sentry.DateUtils>;
			public static getCurrentDateTime(): java.util.Date;
			public static getDateTimeWithMillisPrecision(param0: string): java.util.Date;
			public static getDateTime(param0: string): java.util.Date;
			public static getTimestamp(param0: java.util.Date): string;
			public static getDateTime(param0: number): java.util.Date;
		}
	}
}

declare module io {
	export module sentry {
		export class DiagnosticLogger extends io.sentry.ILogger {
			public static class: java.lang.Class<io.sentry.DiagnosticLogger>;
			public log(param0: io.sentry.SentryLevel, param1: string, param2: java.lang.Throwable): void;
			public isEnabled(param0: io.sentry.SentryLevel): boolean;
			public getLogger(): io.sentry.ILogger;
			public log(param0: io.sentry.SentryLevel, param1: java.lang.Throwable, param2: string, param3: androidNative.Array<any>): void;
			public constructor(param0: io.sentry.SentryOptions, param1: io.sentry.ILogger);
			public log(param0: io.sentry.SentryLevel, param1: string, param2: androidNative.Array<any>): void;
		}
	}
}

declare module io {
	export module sentry {
		export abstract class DirectoryProcessor {
			public static class: java.lang.Class<io.sentry.DirectoryProcessor>;
			public processDirectory(param0: java.io.File): void;
			public processFile(param0: java.io.File, param1: any): void;
			public isRelevantFileName(param0: string): boolean;
		}
		export module DirectoryProcessor {
			export class SendCachedEnvelopeHint implements io.sentry.hints.Cached, io.sentry.hints.Retryable, io.sentry.hints.SubmissionResult, io.sentry.hints.Flushable {
				public static class: java.lang.Class<io.sentry.DirectoryProcessor.SendCachedEnvelopeHint>;
				public isRetry(): boolean;
				public setResult(param0: boolean): void;
				public constructor(param0: number, param1: io.sentry.ILogger);
				public setRetry(param0: boolean): void;
				public isSuccess(): boolean;
				public waitFlush(): boolean;
			}
		}
	}
}

declare module io {
	export module sentry {
		export class Dsn {
			public static class: java.lang.Class<io.sentry.Dsn>;
			public getSecretKey(): string;
			public getPublicKey(): string;
			public getPath(): string;
			public getProjectId(): string;
		}
	}
}

declare module io {
	export module sentry {
		export class DuplicateEventDetectionEventProcessor extends io.sentry.EventProcessor {
			public static class: java.lang.Class<io.sentry.DuplicateEventDetectionEventProcessor>;
			public constructor(param0: io.sentry.SentryOptions);
			public process(param0: io.sentry.SentryEvent, param1: any): io.sentry.SentryEvent;
		}
	}
}

declare module io {
	export module sentry {
		export class EnvelopeReader extends io.sentry.IEnvelopeReader {
			public static class: java.lang.Class<io.sentry.EnvelopeReader>;
			public read(param0: java.io.InputStream): io.sentry.SentryEnvelope;
			public constructor();
		}
	}
}

declare module io {
	export module sentry {
		export class EnvelopeSender extends io.sentry.DirectoryProcessor implements io.sentry.IEnvelopeSender {
			public static class: java.lang.Class<io.sentry.EnvelopeSender>;
			public processEnvelopeFile(param0: string, param1: any): void;
			public constructor(param0: io.sentry.IHub, param1: io.sentry.ISerializer, param2: io.sentry.ILogger, param3: number);
			public processFile(param0: java.io.File, param1: any): void;
			public isRelevantFileName(param0: string): boolean;
		}
	}
}

declare module io {
	export module sentry {
		export class EventProcessor {
			public static class: java.lang.Class<io.sentry.EventProcessor>;
			/**
			 * Constructs a new instance of the io.sentry.EventProcessor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				process(param0: io.sentry.SentryEvent, param1: any): io.sentry.SentryEvent;
			});
			public constructor();
			public process(param0: io.sentry.SentryEvent, param1: any): io.sentry.SentryEvent;
		}
	}
}

declare module io {
	export module sentry {
		export class GsonSerializer extends io.sentry.ISerializer {
			public static class: java.lang.Class<io.sentry.GsonSerializer>;
			public serialize(param0: io.sentry.SentryEnvelope, param1: java.io.OutputStream): void;
			public serialize(param0: java.util.Map<string,any>): string;
			public deserializeEnvelope(param0: java.io.InputStream): io.sentry.SentryEnvelope;
			public constructor(param0: io.sentry.ILogger, param1: io.sentry.IEnvelopeReader);
			public deserialize(param0: java.io.Reader, param1: java.lang.Class): any;
			public serialize(param0: any, param1: java.io.Writer): void;
		}
	}
}

declare module io {
	export module sentry {
		export class HostnameCache {
			public static class: java.lang.Class<io.sentry.HostnameCache>;
			public constructor();
		}
		export module HostnameCache {
			export class HostnameCacheThreadFactory {
				public static class: java.lang.Class<io.sentry.HostnameCache.HostnameCacheThreadFactory>;
				public newThread(param0: java.lang.Runnable): java.lang.Thread;
			}
		}
	}
}

declare module io {
	export module sentry {
		export class Hub extends io.sentry.IHub {
			public static class: java.lang.Class<io.sentry.Hub>;
			public traceHeaders(): io.sentry.SentryTraceHeader;
			public popScope(): void;
			public clone(): io.sentry.IHub;
			public captureMessage(param0: string, param1: io.sentry.SentryLevel): io.sentry.protocol.SentryId;
			public captureTransaction(param0: io.sentry.ITransaction, param1: any): io.sentry.protocol.SentryId;
			public captureException(param0: java.lang.Throwable): io.sentry.protocol.SentryId;
			public captureEnvelope(param0: io.sentry.SentryEnvelope): io.sentry.protocol.SentryId;
			public getSpan(): io.sentry.ISpan;
			public addBreadcrumb(param0: string): void;
			public getLastEventId(): io.sentry.protocol.SentryId;
			public flush(param0: number): void;
			public setExtra(param0: string, param1: string): void;
			public getOptions(): io.sentry.SentryOptions;
			public addBreadcrumb(param0: io.sentry.Breadcrumb, param1: any): void;
			public constructor(param0: io.sentry.SentryOptions);
			public captureEnvelope(param0: io.sentry.SentryEnvelope, param1: any): io.sentry.protocol.SentryId;
			public setLevel(param0: io.sentry.SentryLevel): void;
			public captureMessage(param0: string): io.sentry.protocol.SentryId;
			public captureEvent(param0: io.sentry.SentryEvent): io.sentry.protocol.SentryId;
			public startTransaction(param0: string, param1: string, param2: io.sentry.CustomSamplingContext): io.sentry.ITransaction;
			public clearBreadcrumbs(): void;
			public close(): void;
			public captureTransaction(param0: io.sentry.ITransaction): io.sentry.protocol.SentryId;
			public setTag(param0: string, param1: string): void;
			public configureScope(param0: io.sentry.ScopeCallback): void;
			public startSession(): void;
			public addBreadcrumb(param0: string, param1: string): void;
			public endSession(): void;
			public removeExtra(param0: string): void;
			public setTransaction(param0: string): void;
			public setFingerprint(param0: java.util.List<string>): void;
			public removeTag(param0: string): void;
			public captureEvent(param0: io.sentry.SentryEvent, param1: any): io.sentry.protocol.SentryId;
			public setSpanContext(param0: java.lang.Throwable, param1: io.sentry.ISpan): void;
			public startTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.CustomSamplingContext): io.sentry.ITransaction;
			public captureException(param0: java.lang.Throwable, param1: any): io.sentry.protocol.SentryId;
			public captureUserFeedback(param0: io.sentry.UserFeedback): void;
			public setUser(param0: io.sentry.protocol.User): void;
			public addBreadcrumb(param0: io.sentry.Breadcrumb): void;
			public isEnabled(): boolean;
			public startTransaction(param0: string, param1: string): io.sentry.ITransaction;
			public withScope(param0: io.sentry.ScopeCallback): void;
			public pushScope(): void;
			public bindClient(param0: io.sentry.ISentryClient): void;
			public startTransaction(param0: io.sentry.TransactionContext): io.sentry.ITransaction;
		}
	}
}

declare module io {
	export module sentry {
		export class HubAdapter extends io.sentry.IHub {
			public static class: java.lang.Class<io.sentry.HubAdapter>;
			public traceHeaders(): io.sentry.SentryTraceHeader;
			public popScope(): void;
			public clone(): io.sentry.IHub;
			public captureMessage(param0: string, param1: io.sentry.SentryLevel): io.sentry.protocol.SentryId;
			public captureTransaction(param0: io.sentry.ITransaction, param1: any): io.sentry.protocol.SentryId;
			public captureException(param0: java.lang.Throwable): io.sentry.protocol.SentryId;
			public captureEnvelope(param0: io.sentry.SentryEnvelope): io.sentry.protocol.SentryId;
			public getSpan(): io.sentry.ISpan;
			public addBreadcrumb(param0: string): void;
			public getLastEventId(): io.sentry.protocol.SentryId;
			public flush(param0: number): void;
			public setExtra(param0: string, param1: string): void;
			public getOptions(): io.sentry.SentryOptions;
			public addBreadcrumb(param0: io.sentry.Breadcrumb, param1: any): void;
			public captureEnvelope(param0: io.sentry.SentryEnvelope, param1: any): io.sentry.protocol.SentryId;
			public setLevel(param0: io.sentry.SentryLevel): void;
			public captureMessage(param0: string): io.sentry.protocol.SentryId;
			public startTransaction(param0: string, param1: string, param2: io.sentry.CustomSamplingContext): io.sentry.ITransaction;
			public captureEvent(param0: io.sentry.SentryEvent): io.sentry.protocol.SentryId;
			public clearBreadcrumbs(): void;
			public close(): void;
			public captureTransaction(param0: io.sentry.ITransaction): io.sentry.protocol.SentryId;
			public setTag(param0: string, param1: string): void;
			public configureScope(param0: io.sentry.ScopeCallback): void;
			public startSession(): void;
			public addBreadcrumb(param0: string, param1: string): void;
			public endSession(): void;
			public removeExtra(param0: string): void;
			public setTransaction(param0: string): void;
			public setFingerprint(param0: java.util.List<string>): void;
			public removeTag(param0: string): void;
			public captureEvent(param0: io.sentry.SentryEvent, param1: any): io.sentry.protocol.SentryId;
			public setSpanContext(param0: java.lang.Throwable, param1: io.sentry.ISpan): void;
			public startTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.CustomSamplingContext): io.sentry.ITransaction;
			public captureException(param0: java.lang.Throwable, param1: any): io.sentry.protocol.SentryId;
			public captureUserFeedback(param0: io.sentry.UserFeedback): void;
			public setUser(param0: io.sentry.protocol.User): void;
			public addBreadcrumb(param0: io.sentry.Breadcrumb): void;
			public isEnabled(): boolean;
			public startTransaction(param0: string, param1: string): io.sentry.ITransaction;
			public static getInstance(): io.sentry.HubAdapter;
			public withScope(param0: io.sentry.ScopeCallback): void;
			public pushScope(): void;
			public bindClient(param0: io.sentry.ISentryClient): void;
			public startTransaction(param0: io.sentry.TransactionContext): io.sentry.ITransaction;
		}
	}
}

declare module io {
	export module sentry {
		export class IEnvelopeReader {
			public static class: java.lang.Class<io.sentry.IEnvelopeReader>;
			/**
			 * Constructs a new instance of the io.sentry.IEnvelopeReader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				read(param0: java.io.InputStream): io.sentry.SentryEnvelope;
			});
			public constructor();
			public read(param0: java.io.InputStream): io.sentry.SentryEnvelope;
		}
	}
}

declare module io {
	export module sentry {
		export class IEnvelopeSender {
			public static class: java.lang.Class<io.sentry.IEnvelopeSender>;
			/**
			 * Constructs a new instance of the io.sentry.IEnvelopeSender interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				processEnvelopeFile(param0: string, param1: any): void;
			});
			public constructor();
			public processEnvelopeFile(param0: string, param1: any): void;
		}
	}
}

declare module io {
	export module sentry {
		export class IHub {
			public static class: java.lang.Class<io.sentry.IHub>;
			/**
			 * Constructs a new instance of the io.sentry.IHub interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				isEnabled(): boolean;
				captureEvent(param0: io.sentry.SentryEvent, param1: any): io.sentry.protocol.SentryId;
				captureEvent(param0: io.sentry.SentryEvent): io.sentry.protocol.SentryId;
				captureMessage(param0: string): io.sentry.protocol.SentryId;
				captureMessage(param0: string, param1: io.sentry.SentryLevel): io.sentry.protocol.SentryId;
				captureEnvelope(param0: io.sentry.SentryEnvelope, param1: any): io.sentry.protocol.SentryId;
				captureEnvelope(param0: io.sentry.SentryEnvelope): io.sentry.protocol.SentryId;
				captureException(param0: java.lang.Throwable, param1: any): io.sentry.protocol.SentryId;
				captureException(param0: java.lang.Throwable): io.sentry.protocol.SentryId;
				captureUserFeedback(param0: io.sentry.UserFeedback): void;
				startSession(): void;
				endSession(): void;
				close(): void;
				addBreadcrumb(param0: io.sentry.Breadcrumb, param1: any): void;
				addBreadcrumb(param0: io.sentry.Breadcrumb): void;
				addBreadcrumb(param0: string): void;
				addBreadcrumb(param0: string, param1: string): void;
				setLevel(param0: io.sentry.SentryLevel): void;
				setTransaction(param0: string): void;
				setUser(param0: io.sentry.protocol.User): void;
				setFingerprint(param0: java.util.List<string>): void;
				clearBreadcrumbs(): void;
				setTag(param0: string, param1: string): void;
				removeTag(param0: string): void;
				setExtra(param0: string, param1: string): void;
				removeExtra(param0: string): void;
				getLastEventId(): io.sentry.protocol.SentryId;
				pushScope(): void;
				popScope(): void;
				withScope(param0: io.sentry.ScopeCallback): void;
				configureScope(param0: io.sentry.ScopeCallback): void;
				bindClient(param0: io.sentry.ISentryClient): void;
				flush(param0: number): void;
				clone(): io.sentry.IHub;
				captureTransaction(param0: io.sentry.ITransaction, param1: any): io.sentry.protocol.SentryId;
				captureTransaction(param0: io.sentry.ITransaction): io.sentry.protocol.SentryId;
				startTransaction(param0: io.sentry.TransactionContext): io.sentry.ITransaction;
				startTransaction(param0: string, param1: string, param2: io.sentry.CustomSamplingContext): io.sentry.ITransaction;
				startTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.CustomSamplingContext): io.sentry.ITransaction;
				startTransaction(param0: string, param1: string): io.sentry.ITransaction;
				traceHeaders(): io.sentry.SentryTraceHeader;
				setSpanContext(param0: java.lang.Throwable, param1: io.sentry.ISpan): void;
				getSpan(): io.sentry.ISpan;
				getOptions(): io.sentry.SentryOptions;
			});
			public constructor();
			public traceHeaders(): io.sentry.SentryTraceHeader;
			public popScope(): void;
			public clone(): io.sentry.IHub;
			public captureMessage(param0: string, param1: io.sentry.SentryLevel): io.sentry.protocol.SentryId;
			public captureTransaction(param0: io.sentry.ITransaction, param1: any): io.sentry.protocol.SentryId;
			public captureException(param0: java.lang.Throwable): io.sentry.protocol.SentryId;
			public captureEnvelope(param0: io.sentry.SentryEnvelope): io.sentry.protocol.SentryId;
			public addBreadcrumb(param0: string): void;
			public getSpan(): io.sentry.ISpan;
			public getLastEventId(): io.sentry.protocol.SentryId;
			public flush(param0: number): void;
			public setExtra(param0: string, param1: string): void;
			public getOptions(): io.sentry.SentryOptions;
			public addBreadcrumb(param0: io.sentry.Breadcrumb, param1: any): void;
			public captureEnvelope(param0: io.sentry.SentryEnvelope, param1: any): io.sentry.protocol.SentryId;
			public captureMessage(param0: string): io.sentry.protocol.SentryId;
			public setLevel(param0: io.sentry.SentryLevel): void;
			public captureEvent(param0: io.sentry.SentryEvent): io.sentry.protocol.SentryId;
			public startTransaction(param0: string, param1: string, param2: io.sentry.CustomSamplingContext): io.sentry.ITransaction;
			public clearBreadcrumbs(): void;
			public close(): void;
			public captureTransaction(param0: io.sentry.ITransaction): io.sentry.protocol.SentryId;
			public setTag(param0: string, param1: string): void;
			public configureScope(param0: io.sentry.ScopeCallback): void;
			public startSession(): void;
			public addBreadcrumb(param0: string, param1: string): void;
			public endSession(): void;
			public removeExtra(param0: string): void;
			public setTransaction(param0: string): void;
			public setFingerprint(param0: java.util.List<string>): void;
			public removeTag(param0: string): void;
			public captureEvent(param0: io.sentry.SentryEvent, param1: any): io.sentry.protocol.SentryId;
			public setSpanContext(param0: java.lang.Throwable, param1: io.sentry.ISpan): void;
			public startTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.CustomSamplingContext): io.sentry.ITransaction;
			public captureException(param0: java.lang.Throwable, param1: any): io.sentry.protocol.SentryId;
			public captureUserFeedback(param0: io.sentry.UserFeedback): void;
			public setUser(param0: io.sentry.protocol.User): void;
			public addBreadcrumb(param0: io.sentry.Breadcrumb): void;
			public isEnabled(): boolean;
			public startTransaction(param0: string, param1: string): io.sentry.ITransaction;
			public withScope(param0: io.sentry.ScopeCallback): void;
			public pushScope(): void;
			public bindClient(param0: io.sentry.ISentryClient): void;
			public startTransaction(param0: io.sentry.TransactionContext): io.sentry.ITransaction;
		}
	}
}

declare module io {
	export module sentry {
		export class ILogger {
			public static class: java.lang.Class<io.sentry.ILogger>;
			/**
			 * Constructs a new instance of the io.sentry.ILogger interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				log(param0: io.sentry.SentryLevel, param1: string, param2: androidNative.Array<any>): void;
				log(param0: io.sentry.SentryLevel, param1: string, param2: java.lang.Throwable): void;
				log(param0: io.sentry.SentryLevel, param1: java.lang.Throwable, param2: string, param3: androidNative.Array<any>): void;
				isEnabled(param0: io.sentry.SentryLevel): boolean;
			});
			public constructor();
			public log(param0: io.sentry.SentryLevel, param1: string, param2: java.lang.Throwable): void;
			public isEnabled(param0: io.sentry.SentryLevel): boolean;
			public log(param0: io.sentry.SentryLevel, param1: java.lang.Throwable, param2: string, param3: androidNative.Array<any>): void;
			public log(param0: io.sentry.SentryLevel, param1: string, param2: androidNative.Array<any>): void;
		}
	}
}

declare module io {
	export module sentry {
		export class IScopeObserver {
			public static class: java.lang.Class<io.sentry.IScopeObserver>;
			/**
			 * Constructs a new instance of the io.sentry.IScopeObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				setUser(param0: io.sentry.protocol.User): void;
				addBreadcrumb(param0: io.sentry.Breadcrumb): void;
				setTag(param0: string, param1: string): void;
				removeTag(param0: string): void;
				setExtra(param0: string, param1: string): void;
				removeExtra(param0: string): void;
			});
			public constructor();
			public addBreadcrumb(param0: io.sentry.Breadcrumb): void;
			public setExtra(param0: string, param1: string): void;
			public removeExtra(param0: string): void;
			public removeTag(param0: string): void;
			public setUser(param0: io.sentry.protocol.User): void;
			public setTag(param0: string, param1: string): void;
		}
	}
}

declare module io {
	export module sentry {
		export class ISentryClient {
			public static class: java.lang.Class<io.sentry.ISentryClient>;
			/**
			 * Constructs a new instance of the io.sentry.ISentryClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				isEnabled(): boolean;
				captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Scope, param2: any): io.sentry.protocol.SentryId;
				close(): void;
				flush(param0: number): void;
				captureEvent(param0: io.sentry.SentryEvent): io.sentry.protocol.SentryId;
				captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Scope): io.sentry.protocol.SentryId;
				captureEvent(param0: io.sentry.SentryEvent, param1: any): io.sentry.protocol.SentryId;
				captureMessage(param0: string, param1: io.sentry.SentryLevel, param2: io.sentry.Scope): io.sentry.protocol.SentryId;
				captureMessage(param0: string, param1: io.sentry.SentryLevel): io.sentry.protocol.SentryId;
				captureException(param0: java.lang.Throwable): io.sentry.protocol.SentryId;
				captureException(param0: java.lang.Throwable, param1: io.sentry.Scope, param2: any): io.sentry.protocol.SentryId;
				captureException(param0: java.lang.Throwable, param1: any): io.sentry.protocol.SentryId;
				captureException(param0: java.lang.Throwable, param1: io.sentry.Scope): io.sentry.protocol.SentryId;
				captureUserFeedback(param0: io.sentry.UserFeedback): void;
				captureSession(param0: io.sentry.Session, param1: any): void;
				captureSession(param0: io.sentry.Session): void;
				captureEnvelope(param0: io.sentry.SentryEnvelope, param1: any): io.sentry.protocol.SentryId;
				captureEnvelope(param0: io.sentry.SentryEnvelope): io.sentry.protocol.SentryId;
				captureTransaction(param0: io.sentry.ITransaction, param1: io.sentry.Scope, param2: any): io.sentry.protocol.SentryId;
				captureTransaction(param0: io.sentry.ITransaction): io.sentry.protocol.SentryId;
			});
			public constructor();
			public captureSession(param0: io.sentry.Session): void;
			public captureMessage(param0: string, param1: io.sentry.SentryLevel): io.sentry.protocol.SentryId;
			public captureEvent(param0: io.sentry.SentryEvent, param1: any): io.sentry.protocol.SentryId;
			public captureException(param0: java.lang.Throwable): io.sentry.protocol.SentryId;
			public captureEnvelope(param0: io.sentry.SentryEnvelope): io.sentry.protocol.SentryId;
			public flush(param0: number): void;
			public captureMessage(param0: string, param1: io.sentry.SentryLevel, param2: io.sentry.Scope): io.sentry.protocol.SentryId;
			public captureException(param0: java.lang.Throwable, param1: any): io.sentry.protocol.SentryId;
			public captureTransaction(param0: io.sentry.ITransaction, param1: io.sentry.Scope, param2: any): io.sentry.protocol.SentryId;
			public captureUserFeedback(param0: io.sentry.UserFeedback): void;
			public captureException(param0: java.lang.Throwable, param1: io.sentry.Scope, param2: any): io.sentry.protocol.SentryId;
			public captureSession(param0: io.sentry.Session, param1: any): void;
			public isEnabled(): boolean;
			public captureEnvelope(param0: io.sentry.SentryEnvelope, param1: any): io.sentry.protocol.SentryId;
			public captureEvent(param0: io.sentry.SentryEvent): io.sentry.protocol.SentryId;
			public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Scope): io.sentry.protocol.SentryId;
			public close(): void;
			public captureException(param0: java.lang.Throwable, param1: io.sentry.Scope): io.sentry.protocol.SentryId;
			public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Scope, param2: any): io.sentry.protocol.SentryId;
			public captureTransaction(param0: io.sentry.ITransaction): io.sentry.protocol.SentryId;
		}
	}
}

declare module io {
	export module sentry {
		export class ISentryExecutorService {
			public static class: java.lang.Class<io.sentry.ISentryExecutorService>;
			/**
			 * Constructs a new instance of the io.sentry.ISentryExecutorService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				submit(param0: java.lang.Runnable): java.util.concurrent.Future<any>;
				close(param0: number): void;
			});
			public constructor();
			public submit(param0: java.lang.Runnable): java.util.concurrent.Future<any>;
			public close(param0: number): void;
		}
	}
}

declare module io {
	export module sentry {
		export class ISerializer {
			public static class: java.lang.Class<io.sentry.ISerializer>;
			/**
			 * Constructs a new instance of the io.sentry.ISerializer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				deserialize(param0: java.io.Reader, param1: java.lang.Class): any;
				deserializeEnvelope(param0: java.io.InputStream): io.sentry.SentryEnvelope;
				serialize(param0: any, param1: java.io.Writer): void;
				serialize(param0: io.sentry.SentryEnvelope, param1: java.io.OutputStream): void;
				serialize(param0: java.util.Map<string,any>): string;
			});
			public constructor();
			public serialize(param0: io.sentry.SentryEnvelope, param1: java.io.OutputStream): void;
			public serialize(param0: java.util.Map<string,any>): string;
			public deserializeEnvelope(param0: java.io.InputStream): io.sentry.SentryEnvelope;
			public deserialize(param0: java.io.Reader, param1: java.lang.Class): any;
			public serialize(param0: any, param1: java.io.Writer): void;
		}
	}
}

declare module io {
	export module sentry {
		export class ISpan {
			public static class: java.lang.Class<io.sentry.ISpan>;
			/**
			 * Constructs a new instance of the io.sentry.ISpan interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				startChild(param0: string): io.sentry.ISpan;
				startChild(param0: string, param1: string): io.sentry.ISpan;
				toSentryTrace(): io.sentry.SentryTraceHeader;
				finish(): void;
				finish(param0: io.sentry.SpanStatus): void;
				setOperation(param0: string): void;
				getOperation(): string;
				setDescription(param0: string): void;
				getDescription(): string;
				setStatus(param0: io.sentry.SpanStatus): void;
				getStatus(): io.sentry.SpanStatus;
				setThrowable(param0: java.lang.Throwable): void;
				getThrowable(): java.lang.Throwable;
				getSpanContext(): io.sentry.SpanContext;
				setTag(param0: string, param1: string): void;
				isFinished(): boolean;
			});
			public constructor();
			public setOperation(param0: string): void;
			public startChild(param0: string, param1: string): io.sentry.ISpan;
			public finish(): void;
			public setDescription(param0: string): void;
			public finish(param0: io.sentry.SpanStatus): void;
			public getSpanContext(): io.sentry.SpanContext;
			public setStatus(param0: io.sentry.SpanStatus): void;
			public getThrowable(): java.lang.Throwable;
			public isFinished(): boolean;
			public getStatus(): io.sentry.SpanStatus;
			public toSentryTrace(): io.sentry.SentryTraceHeader;
			public getOperation(): string;
			public getDescription(): string;
			public startChild(param0: string): io.sentry.ISpan;
			public setThrowable(param0: java.lang.Throwable): void;
			public setTag(param0: string, param1: string): void;
		}
	}
}

declare module io {
	export module sentry {
		export class ITransaction extends io.sentry.ISpan {
			public static class: java.lang.Class<io.sentry.ITransaction>;
			/**
			 * Constructs a new instance of the io.sentry.ITransaction interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				setName(param0: string): void;
				getName(): string;
				setRequest(param0: io.sentry.protocol.Request): void;
				getRequest(): io.sentry.protocol.Request;
				getContexts(): io.sentry.protocol.Contexts;
				getSpans(): java.util.List<io.sentry.Span>;
				isSampled(): java.lang.Boolean;
				getLatestActiveSpan(): io.sentry.Span;
				getEventId(): io.sentry.protocol.SentryId;
				getTransaction(): string;
				startChild(param0: string): io.sentry.ISpan;
				startChild(param0: string, param1: string): io.sentry.ISpan;
				toSentryTrace(): io.sentry.SentryTraceHeader;
				finish(): void;
				finish(param0: io.sentry.SpanStatus): void;
				setOperation(param0: string): void;
				getOperation(): string;
				setDescription(param0: string): void;
				getDescription(): string;
				setStatus(param0: io.sentry.SpanStatus): void;
				getStatus(): io.sentry.SpanStatus;
				setThrowable(param0: java.lang.Throwable): void;
				getThrowable(): java.lang.Throwable;
				getSpanContext(): io.sentry.SpanContext;
				setTag(param0: string, param1: string): void;
				isFinished(): boolean;
			});
			public constructor();
			public getEventId(): io.sentry.protocol.SentryId;
			public finish(): void;
			public getContexts(): io.sentry.protocol.Contexts;
			public setStatus(param0: io.sentry.SpanStatus): void;
			public isFinished(): boolean;
			public getStatus(): io.sentry.SpanStatus;
			public toSentryTrace(): io.sentry.SentryTraceHeader;
			public getOperation(): string;
			public setThrowable(param0: java.lang.Throwable): void;
			public setTag(param0: string, param1: string): void;
			public setRequest(param0: io.sentry.protocol.Request): void;
			public setOperation(param0: string): void;
			public startChild(param0: string, param1: string): io.sentry.ISpan;
			public setDescription(param0: string): void;
			public finish(param0: io.sentry.SpanStatus): void;
			public getSpanContext(): io.sentry.SpanContext;
			public getLatestActiveSpan(): io.sentry.Span;
			public getRequest(): io.sentry.protocol.Request;
			public getTransaction(): string;
			public getThrowable(): java.lang.Throwable;
			public getName(): string;
			public getSpans(): java.util.List<io.sentry.Span>;
			public isSampled(): java.lang.Boolean;
			public getDescription(): string;
			public startChild(param0: string): io.sentry.ISpan;
			public setName(param0: string): void;
		}
	}
}

declare module io {
	export module sentry {
		export class ITransportFactory {
			public static class: java.lang.Class<io.sentry.ITransportFactory>;
			/**
			 * Constructs a new instance of the io.sentry.ITransportFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				create(param0: io.sentry.SentryOptions, param1: io.sentry.RequestDetails): io.sentry.transport.ITransport;
			});
			public constructor();
			public create(param0: io.sentry.SentryOptions, param1: io.sentry.RequestDetails): io.sentry.transport.ITransport;
		}
	}
}

declare module io {
	export module sentry {
		export class IUnknownPropertiesConsumer {
			public static class: java.lang.Class<io.sentry.IUnknownPropertiesConsumer>;
			/**
			 * Constructs a new instance of the io.sentry.IUnknownPropertiesConsumer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				acceptUnknownProperties(param0: java.util.Map<string,any>): void;
			});
			public constructor();
			public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
		}
	}
}

declare module io {
	export module sentry {
		export class Integration {
			public static class: java.lang.Class<io.sentry.Integration>;
			/**
			 * Constructs a new instance of the io.sentry.Integration interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				register(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): void;
			});
			public constructor();
			public register(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): void;
		}
	}
}

declare module io {
	export module sentry {
		export class IpAddressUtils {
			public static class: java.lang.Class<io.sentry.IpAddressUtils>;
			public static isDefault(param0: string): boolean;
		}
	}
}

declare module io {
	export module sentry {
		export class MainEventProcessor extends io.sentry.EventProcessor {
			public static class: java.lang.Class<io.sentry.MainEventProcessor>;
			public static DEFAULT_IP_ADDRESS: string;
			public process(param0: io.sentry.SentryEvent, param1: any): io.sentry.SentryEvent;
		}
	}
}

declare module io {
	export module sentry {
		export class NoOpEnvelopeReader extends io.sentry.IEnvelopeReader {
			public static class: java.lang.Class<io.sentry.NoOpEnvelopeReader>;
			public read(param0: java.io.InputStream): io.sentry.SentryEnvelope;
			public static getInstance(): io.sentry.NoOpEnvelopeReader;
		}
	}
}

declare module io {
	export module sentry {
		export class NoOpHub extends io.sentry.IHub {
			public static class: java.lang.Class<io.sentry.NoOpHub>;
			public traceHeaders(): io.sentry.SentryTraceHeader;
			public popScope(): void;
			public clone(): io.sentry.IHub;
			public captureMessage(param0: string, param1: io.sentry.SentryLevel): io.sentry.protocol.SentryId;
			public static getInstance(): io.sentry.NoOpHub;
			public captureTransaction(param0: io.sentry.ITransaction, param1: any): io.sentry.protocol.SentryId;
			public captureException(param0: java.lang.Throwable): io.sentry.protocol.SentryId;
			public captureEnvelope(param0: io.sentry.SentryEnvelope): io.sentry.protocol.SentryId;
			public getSpan(): io.sentry.ISpan;
			public addBreadcrumb(param0: string): void;
			public getLastEventId(): io.sentry.protocol.SentryId;
			public flush(param0: number): void;
			public setExtra(param0: string, param1: string): void;
			public getOptions(): io.sentry.SentryOptions;
			public addBreadcrumb(param0: io.sentry.Breadcrumb, param1: any): void;
			public captureEnvelope(param0: io.sentry.SentryEnvelope, param1: any): io.sentry.protocol.SentryId;
			public setLevel(param0: io.sentry.SentryLevel): void;
			public captureMessage(param0: string): io.sentry.protocol.SentryId;
			public captureEvent(param0: io.sentry.SentryEvent): io.sentry.protocol.SentryId;
			public startTransaction(param0: string, param1: string, param2: io.sentry.CustomSamplingContext): io.sentry.ITransaction;
			public clearBreadcrumbs(): void;
			public close(): void;
			public captureTransaction(param0: io.sentry.ITransaction): io.sentry.protocol.SentryId;
			public setTag(param0: string, param1: string): void;
			public configureScope(param0: io.sentry.ScopeCallback): void;
			public startSession(): void;
			public addBreadcrumb(param0: string, param1: string): void;
			public endSession(): void;
			public removeExtra(param0: string): void;
			public setTransaction(param0: string): void;
			public setFingerprint(param0: java.util.List<string>): void;
			public removeTag(param0: string): void;
			public captureEvent(param0: io.sentry.SentryEvent, param1: any): io.sentry.protocol.SentryId;
			public setSpanContext(param0: java.lang.Throwable, param1: io.sentry.ISpan): void;
			public startTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.CustomSamplingContext): io.sentry.ITransaction;
			public captureException(param0: java.lang.Throwable, param1: any): io.sentry.protocol.SentryId;
			public captureUserFeedback(param0: io.sentry.UserFeedback): void;
			public setUser(param0: io.sentry.protocol.User): void;
			public addBreadcrumb(param0: io.sentry.Breadcrumb): void;
			public isEnabled(): boolean;
			public startTransaction(param0: string, param1: string): io.sentry.ITransaction;
			public withScope(param0: io.sentry.ScopeCallback): void;
			public pushScope(): void;
			public bindClient(param0: io.sentry.ISentryClient): void;
			public startTransaction(param0: io.sentry.TransactionContext): io.sentry.ITransaction;
		}
	}
}

declare module io {
	export module sentry {
		export class NoOpLogger extends io.sentry.ILogger {
			public static class: java.lang.Class<io.sentry.NoOpLogger>;
			public static getInstance(): io.sentry.NoOpLogger;
			public log(param0: io.sentry.SentryLevel, param1: string, param2: java.lang.Throwable): void;
			public isEnabled(param0: io.sentry.SentryLevel): boolean;
			public log(param0: io.sentry.SentryLevel, param1: java.lang.Throwable, param2: string, param3: androidNative.Array<any>): void;
			public log(param0: io.sentry.SentryLevel, param1: string, param2: androidNative.Array<any>): void;
		}
	}
}

declare module io {
	export module sentry {
		export class NoOpSentryClient extends io.sentry.ISentryClient {
			public static class: java.lang.Class<io.sentry.NoOpSentryClient>;
			public captureSession(param0: io.sentry.Session): void;
			public captureMessage(param0: string, param1: io.sentry.SentryLevel): io.sentry.protocol.SentryId;
			public captureEvent(param0: io.sentry.SentryEvent, param1: any): io.sentry.protocol.SentryId;
			public captureException(param0: java.lang.Throwable): io.sentry.protocol.SentryId;
			public captureEnvelope(param0: io.sentry.SentryEnvelope): io.sentry.protocol.SentryId;
			public flush(param0: number): void;
			public captureTransaction(param0: io.sentry.ITransaction, param1: io.sentry.Scope, param2: any): io.sentry.protocol.SentryId;
			public captureMessage(param0: string, param1: io.sentry.SentryLevel, param2: io.sentry.Scope): io.sentry.protocol.SentryId;
			public captureException(param0: java.lang.Throwable, param1: any): io.sentry.protocol.SentryId;
			public static getInstance(): io.sentry.NoOpSentryClient;
			public captureUserFeedback(param0: io.sentry.UserFeedback): void;
			public captureSession(param0: io.sentry.Session, param1: any): void;
			public captureException(param0: java.lang.Throwable, param1: io.sentry.Scope, param2: any): io.sentry.protocol.SentryId;
			public isEnabled(): boolean;
			public captureEnvelope(param0: io.sentry.SentryEnvelope, param1: any): io.sentry.protocol.SentryId;
			public captureEvent(param0: io.sentry.SentryEvent): io.sentry.protocol.SentryId;
			public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Scope): io.sentry.protocol.SentryId;
			public close(): void;
			public captureException(param0: java.lang.Throwable, param1: io.sentry.Scope): io.sentry.protocol.SentryId;
			public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Scope, param2: any): io.sentry.protocol.SentryId;
			public captureTransaction(param0: io.sentry.ITransaction): io.sentry.protocol.SentryId;
		}
	}
}

declare module io {
	export module sentry {
		export class NoOpSerializer extends io.sentry.ISerializer {
			public static class: java.lang.Class<io.sentry.NoOpSerializer>;
			public serialize(param0: io.sentry.SentryEnvelope, param1: java.io.OutputStream): void;
			public static getInstance(): io.sentry.NoOpSerializer;
			public serialize(param0: java.util.Map<string,any>): string;
			public deserializeEnvelope(param0: java.io.InputStream): io.sentry.SentryEnvelope;
			public deserialize(param0: java.io.Reader, param1: java.lang.Class): any;
			public serialize(param0: any, param1: java.io.Writer): void;
		}
	}
}

declare module io {
	export module sentry {
		export class NoOpSpan extends io.sentry.ISpan {
			public static class: java.lang.Class<io.sentry.NoOpSpan>;
			public setOperation(param0: string): void;
			public startChild(param0: string, param1: string): io.sentry.ISpan;
			public finish(): void;
			public setDescription(param0: string): void;
			public finish(param0: io.sentry.SpanStatus): void;
			public getSpanContext(): io.sentry.SpanContext;
			public setStatus(param0: io.sentry.SpanStatus): void;
			public getThrowable(): java.lang.Throwable;
			public isFinished(): boolean;
			public getStatus(): io.sentry.SpanStatus;
			public static getInstance(): io.sentry.NoOpSpan;
			public toSentryTrace(): io.sentry.SentryTraceHeader;
			public getOperation(): string;
			public getDescription(): string;
			public startChild(param0: string): io.sentry.ISpan;
			public setThrowable(param0: java.lang.Throwable): void;
			public setTag(param0: string, param1: string): void;
		}
	}
}

declare module io {
	export module sentry {
		export class NoOpTransaction extends io.sentry.ITransaction {
			public static class: java.lang.Class<io.sentry.NoOpTransaction>;
			public getEventId(): io.sentry.protocol.SentryId;
			public finish(): void;
			public getContexts(): io.sentry.protocol.Contexts;
			public setStatus(param0: io.sentry.SpanStatus): void;
			public isFinished(): boolean;
			public getStatus(): io.sentry.SpanStatus;
			public toSentryTrace(): io.sentry.SentryTraceHeader;
			public getOperation(): string;
			public setThrowable(param0: java.lang.Throwable): void;
			public setTag(param0: string, param1: string): void;
			public static getInstance(): io.sentry.NoOpTransaction;
			public setRequest(param0: io.sentry.protocol.Request): void;
			public setOperation(param0: string): void;
			public startChild(param0: string, param1: string): io.sentry.ISpan;
			public setDescription(param0: string): void;
			public finish(param0: io.sentry.SpanStatus): void;
			public getSpanContext(): io.sentry.SpanContext;
			public getLatestActiveSpan(): io.sentry.Span;
			public getRequest(): io.sentry.protocol.Request;
			public getTransaction(): string;
			public getThrowable(): java.lang.Throwable;
			public getName(): string;
			public getSpans(): java.util.List<io.sentry.Span>;
			public isSampled(): java.lang.Boolean;
			public getDescription(): string;
			public startChild(param0: string): io.sentry.ISpan;
			public setName(param0: string): void;
		}
	}
}

declare module io {
	export module sentry {
		export class NoOpTransportFactory extends io.sentry.ITransportFactory {
			public static class: java.lang.Class<io.sentry.NoOpTransportFactory>;
			public static getInstance(): io.sentry.NoOpTransportFactory;
			public create(param0: io.sentry.SentryOptions, param1: io.sentry.RequestDetails): io.sentry.transport.ITransport;
		}
	}
}

declare module io {
	export module sentry {
		export class OptionsContainer<T>  extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.OptionsContainer<any>>;
			public createInstance(): T;
			public static create(param0: java.lang.Class): io.sentry.OptionsContainer<any>;
		}
	}
}

declare module io {
	export module sentry {
		export class OutboxSender extends io.sentry.DirectoryProcessor implements io.sentry.IEnvelopeSender {
			public static class: java.lang.Class<io.sentry.OutboxSender>;
			public processEnvelopeFile(param0: string, param1: any): void;
			public constructor(param0: io.sentry.IHub, param1: io.sentry.IEnvelopeReader, param2: io.sentry.ISerializer, param3: io.sentry.ILogger, param4: number);
			public processFile(param0: java.io.File, param1: any): void;
			public isRelevantFileName(param0: string): boolean;
		}
	}
}

declare module io {
	export module sentry {
		export class RequestDetails {
			public static class: java.lang.Class<io.sentry.RequestDetails>;
			public getHeaders(): java.util.Map<string,string>;
			public constructor(param0: string, param1: java.util.Map<string,string>);
			public getUrl(): java.net.URL;
		}
	}
}

declare module io {
	export module sentry {
		export class RequestDetailsResolver {
			public static class: java.lang.Class<io.sentry.RequestDetailsResolver>;
			public constructor(param0: io.sentry.SentryOptions);
		}
	}
}

declare module io {
	export module sentry {
		export class SamplingContext {
			public static class: java.lang.Class<io.sentry.SamplingContext>;
			public constructor(param0: io.sentry.TransactionContext, param1: io.sentry.CustomSamplingContext);
			public getCustomSamplingContext(): io.sentry.CustomSamplingContext;
			public getTransactionContext(): io.sentry.TransactionContext;
		}
	}
}

declare module io {
	export module sentry {
		export class Scope {
			public static class: java.lang.Class<io.sentry.Scope>;
			public setContexts(param0: string, param1: string): void;
			public clearTransaction(): void;
			public getContexts(): io.sentry.protocol.Contexts;
			public setContexts(param0: string, param1: java.lang.Boolean): void;
			public getUser(): io.sentry.protocol.User;
			public getSpan(): io.sentry.ISpan;
			public removeContexts(param0: string): void;
			public withTransaction(param0: io.sentry.Scope.IWithTransaction): void;
			public setExtra(param0: string, param1: string): void;
			public addBreadcrumb(param0: io.sentry.Breadcrumb, param1: any): void;
			public constructor(param0: io.sentry.SentryOptions);
			public setLevel(param0: io.sentry.SentryLevel): void;
			public clearBreadcrumbs(): void;
			public setTag(param0: string, param1: string): void;
			public clear(): void;
			public setRequest(param0: io.sentry.protocol.Request): void;
			public getTransaction(): io.sentry.ITransaction;
			public setTransaction(param0: io.sentry.ITransaction): void;
			public removeExtra(param0: string): void;
			public clone(): io.sentry.Scope;
			public setTransaction(param0: string): void;
			public setFingerprint(param0: java.util.List<string>): void;
			public removeTag(param0: string): void;
			public getTransactionName(): string;
			public setUser(param0: io.sentry.protocol.User): void;
			public getRequest(): io.sentry.protocol.Request;
			public addBreadcrumb(param0: io.sentry.Breadcrumb): void;
			public getLevel(): io.sentry.SentryLevel;
			public addAttachment(param0: io.sentry.Attachment): void;
			public setContexts(param0: string, param1: any): void;
			public setContexts(param0: string, param1: java.lang.Number): void;
			public addEventProcessor(param0: io.sentry.EventProcessor): void;
		}
		export module Scope {
			export class IWithSession {
				public static class: java.lang.Class<io.sentry.Scope.IWithSession>;
				/**
				 * Constructs a new instance of the io.sentry.Scope$IWithSession interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					accept(param0: io.sentry.Session): void;
				});
				public constructor();
				public accept(param0: io.sentry.Session): void;
			}
			export class IWithTransaction {
				public static class: java.lang.Class<io.sentry.Scope.IWithTransaction>;
				/**
				 * Constructs a new instance of the io.sentry.Scope$IWithTransaction interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					accept(param0: io.sentry.ITransaction): void;
				});
				public constructor();
				public accept(param0: io.sentry.ITransaction): void;
			}
			export class SessionPair {
				public static class: java.lang.Class<io.sentry.Scope.SessionPair>;
				public getCurrent(): io.sentry.Session;
				public constructor(param0: io.sentry.Session, param1: io.sentry.Session);
				public getPrevious(): io.sentry.Session;
			}
		}
	}
}

declare module io {
	export module sentry {
		export class ScopeCallback {
			public static class: java.lang.Class<io.sentry.ScopeCallback>;
			/**
			 * Constructs a new instance of the io.sentry.ScopeCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				run(param0: io.sentry.Scope): void;
			});
			public constructor();
			public run(param0: io.sentry.Scope): void;
		}
	}
}

declare module io {
	export module sentry {
		export class SendCachedEnvelopeFireAndForgetIntegration extends io.sentry.Integration {
			public static class: java.lang.Class<io.sentry.SendCachedEnvelopeFireAndForgetIntegration>;
			public register(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): void;
			public constructor(param0: io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForgetFactory);
		}
		export module SendCachedEnvelopeFireAndForgetIntegration {
			export class SendFireAndForget {
				public static class: java.lang.Class<io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForget>;
				/**
				 * Constructs a new instance of the io.sentry.SendCachedEnvelopeFireAndForgetIntegration$SendFireAndForget interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					send(): void;
				});
				public constructor();
				public send(): void;
			}
			export class SendFireAndForgetDirPath {
				public static class: java.lang.Class<io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForgetDirPath>;
				/**
				 * Constructs a new instance of the io.sentry.SendCachedEnvelopeFireAndForgetIntegration$SendFireAndForgetDirPath interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getDirPath(): string;
				});
				public constructor();
				public getDirPath(): string;
			}
			export class SendFireAndForgetFactory {
				public static class: java.lang.Class<io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForgetFactory>;
				/**
				 * Constructs a new instance of the io.sentry.SendCachedEnvelopeFireAndForgetIntegration$SendFireAndForgetFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					create(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForget;
					hasValidPath(param0: string, param1: io.sentry.ILogger): boolean;
					processDir(param0: io.sentry.DirectoryProcessor, param1: string, param2: io.sentry.ILogger): io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForget;
					lambda$processDir$0(param0: io.sentry.ILogger, param1: string, param2: io.sentry.DirectoryProcessor, param3: java.io.File): void;
				});
				public constructor();
				public hasValidPath(param0: string, param1: io.sentry.ILogger): boolean;
				public create(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForget;
				public processDir(param0: io.sentry.DirectoryProcessor, param1: string, param2: io.sentry.ILogger): io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForget;
			}
		}
	}
}

declare module io {
	export module sentry {
		export class SendFireAndForgetEnvelopeSender extends io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForgetFactory {
			public static class: java.lang.Class<io.sentry.SendFireAndForgetEnvelopeSender>;
			public processDir(param0: io.sentry.DirectoryProcessor, param1: string, param2: io.sentry.ILogger): io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForget;
			public create(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForget;
			public constructor(param0: io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForgetDirPath);
			public hasValidPath(param0: string, param1: io.sentry.ILogger): boolean;
		}
	}
}

declare module io {
	export module sentry {
		export class SendFireAndForgetOutboxSender extends io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForgetFactory {
			public static class: java.lang.Class<io.sentry.SendFireAndForgetOutboxSender>;
			public processDir(param0: io.sentry.DirectoryProcessor, param1: string, param2: io.sentry.ILogger): io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForget;
			public create(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForget;
			public constructor(param0: io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForgetDirPath);
			public hasValidPath(param0: string, param1: io.sentry.ILogger): boolean;
		}
	}
}

declare module io {
	export module sentry {
		export class Sentry {
			public static class: java.lang.Class<io.sentry.Sentry>;
			public static withScope(param0: io.sentry.ScopeCallback): void;
			public static traceHeaders(): io.sentry.SentryTraceHeader;
			public static init(param0: io.sentry.Sentry.OptionsConfiguration<io.sentry.SentryOptions>): void;
			public static clearBreadcrumbs(): void;
			public static setUser(param0: io.sentry.protocol.User): void;
			public static captureException(param0: java.lang.Throwable, param1: any): io.sentry.protocol.SentryId;
			public static popScope(): void;
			public static addBreadcrumb(param0: string, param1: string): void;
			public static startSession(): void;
			public static captureMessage(param0: string, param1: io.sentry.SentryLevel): io.sentry.protocol.SentryId;
			public static addBreadcrumb(param0: string): void;
			public static setLevel(param0: io.sentry.SentryLevel): void;
			public static addBreadcrumb(param0: io.sentry.Breadcrumb): void;
			public static isEnabled(): boolean;
			public static init(param0: io.sentry.OptionsContainer<any>, param1: io.sentry.Sentry.OptionsConfiguration<any>, param2: boolean): void;
			public static captureUserFeedback(param0: io.sentry.UserFeedback): void;
			public static startTransaction(param0: io.sentry.TransactionContext): io.sentry.ITransaction;
			public static startTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.CustomSamplingContext): io.sentry.ITransaction;
			public static getSpan(): io.sentry.ISpan;
			public static captureMessage(param0: string): io.sentry.protocol.SentryId;
			public static addBreadcrumb(param0: io.sentry.Breadcrumb, param1: any): void;
			public static captureEvent(param0: io.sentry.SentryEvent): io.sentry.protocol.SentryId;
			public static captureEvent(param0: io.sentry.SentryEvent, param1: any): io.sentry.protocol.SentryId;
			public static flush(param0: number): void;
			public static captureException(param0: java.lang.Throwable): io.sentry.protocol.SentryId;
			public static removeExtra(param0: string): void;
			public static init(param0: io.sentry.SentryOptions): void;
			public static startTransaction(param0: string, param1: string, param2: io.sentry.CustomSamplingContext): io.sentry.ITransaction;
			public static init(param0: io.sentry.OptionsContainer<any>, param1: io.sentry.Sentry.OptionsConfiguration<any>): void;
			public static setTransaction(param0: string): void;
			public static setExtra(param0: string, param1: string): void;
			public static startTransaction(param0: string, param1: string, param2: string): io.sentry.ITransaction;
			public static init(): void;
			public static getLastEventId(): io.sentry.protocol.SentryId;
			public static setTag(param0: string, param1: string): void;
			public static pushScope(): void;
			public static configureScope(param0: io.sentry.ScopeCallback): void;
			public static endSession(): void;
			public static close(): void;
			public static init(param0: io.sentry.Sentry.OptionsConfiguration<io.sentry.SentryOptions>, param1: boolean): void;
			public static setFingerprint(param0: java.util.List<string>): void;
			public static bindClient(param0: io.sentry.ISentryClient): void;
			public static startTransaction(param0: string, param1: string): io.sentry.ITransaction;
			public static init(param0: string): void;
			public static removeTag(param0: string): void;
		}
		export module Sentry {
			export class OptionsConfiguration<T>  extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.Sentry.OptionsConfiguration<any>>;
				/**
				 * Constructs a new instance of the io.sentry.Sentry$OptionsConfiguration interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					configure(param0: T): void;
				});
				public constructor();
				public configure(param0: T): void;
			}
		}
	}
}

declare module io {
	export module sentry {
		export abstract class SentryBaseEvent {
			public static class: java.lang.Class<io.sentry.SentryBaseEvent>;
			public throwable: java.lang.Throwable;
			public setTags(param0: java.util.Map<string,string>): void;
			public getSdk(): io.sentry.protocol.SdkVersion;
			public setRequest(param0: io.sentry.protocol.Request): void;
			public getEventId(): io.sentry.protocol.SentryId;
			public constructor(param0: io.sentry.protocol.SentryId);
			public setEventId(param0: io.sentry.protocol.SentryId): void;
			public getContexts(): io.sentry.protocol.Contexts;
			public removeTag(param0: string): void;
			public constructor();
			public setSdk(param0: io.sentry.protocol.SdkVersion): void;
			public getTag(param0: string): string;
			public getRequest(): io.sentry.protocol.Request;
			public getRelease(): string;
			public getThrowable(): java.lang.Throwable;
			public getOriginThrowable(): java.lang.Throwable;
			public setEnvironment(param0: string): void;
			public setRelease(param0: string): void;
			public getEnvironment(): string;
			public setThrowable(param0: java.lang.Throwable): void;
			public setTag(param0: string, param1: string): void;
		}
	}
}

declare module io {
	export module sentry {
		export class SentryClient extends io.sentry.ISentryClient {
			public static class: java.lang.Class<io.sentry.SentryClient>;
			public captureSession(param0: io.sentry.Session): void;
			public captureMessage(param0: string, param1: io.sentry.SentryLevel): io.sentry.protocol.SentryId;
			public captureEvent(param0: io.sentry.SentryEvent, param1: any): io.sentry.protocol.SentryId;
			public captureException(param0: java.lang.Throwable): io.sentry.protocol.SentryId;
			public captureEnvelope(param0: io.sentry.SentryEnvelope): io.sentry.protocol.SentryId;
			public captureTransaction(param0: io.sentry.ITransaction, param1: io.sentry.Scope, param2: any): io.sentry.protocol.SentryId;
			public flush(param0: number): void;
			public captureMessage(param0: string, param1: io.sentry.SentryLevel, param2: io.sentry.Scope): io.sentry.protocol.SentryId;
			public captureException(param0: java.lang.Throwable, param1: any): io.sentry.protocol.SentryId;
			public captureUserFeedback(param0: io.sentry.UserFeedback): void;
			public captureSession(param0: io.sentry.Session, param1: any): void;
			public captureException(param0: java.lang.Throwable, param1: io.sentry.Scope, param2: any): io.sentry.protocol.SentryId;
			public isEnabled(): boolean;
			public captureEnvelope(param0: io.sentry.SentryEnvelope, param1: any): io.sentry.protocol.SentryId;
			public captureEvent(param0: io.sentry.SentryEvent): io.sentry.protocol.SentryId;
			public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Scope): io.sentry.protocol.SentryId;
			public close(): void;
			public captureException(param0: java.lang.Throwable, param1: io.sentry.Scope): io.sentry.protocol.SentryId;
			public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Scope, param2: any): io.sentry.protocol.SentryId;
			public captureTransaction(param0: io.sentry.ITransaction): io.sentry.protocol.SentryId;
		}
		export module SentryClient {
			export class SortBreadcrumbsByDate extends java.util.Comparator<io.sentry.Breadcrumb> {
				public static class: java.lang.Class<io.sentry.SentryClient.SortBreadcrumbsByDate>;
				public compare(param0: io.sentry.Breadcrumb, param1: io.sentry.Breadcrumb): number;
			}
		}
	}
}

declare module io {
	export module sentry {
		export class SentryEnvelope {
			public static class: java.lang.Class<io.sentry.SentryEnvelope>;
			public constructor(param0: io.sentry.protocol.SentryId, param1: io.sentry.protocol.SdkVersion, param2: io.sentry.SentryEnvelopeItem);
			public static from(param0: io.sentry.ISerializer, param1: io.sentry.SentryBaseEvent, param2: io.sentry.protocol.SdkVersion): io.sentry.SentryEnvelope;
			public getHeader(): io.sentry.SentryEnvelopeHeader;
			public constructor(param0: io.sentry.SentryEnvelopeHeader, param1: java.lang.Iterable<io.sentry.SentryEnvelopeItem>);
			public constructor(param0: io.sentry.protocol.SentryId, param1: io.sentry.protocol.SdkVersion, param2: java.lang.Iterable<io.sentry.SentryEnvelopeItem>);
			public getItems(): java.lang.Iterable<io.sentry.SentryEnvelopeItem>;
			public static from(param0: io.sentry.ISerializer, param1: io.sentry.Session, param2: io.sentry.protocol.SdkVersion): io.sentry.SentryEnvelope;
		}
	}
}

declare module io {
	export module sentry {
		export class SentryEnvelopeHeader {
			public static class: java.lang.Class<io.sentry.SentryEnvelopeHeader>;
			public getEventId(): io.sentry.protocol.SentryId;
			public constructor(param0: io.sentry.protocol.SentryId);
			public getSdkVersion(): io.sentry.protocol.SdkVersion;
			public constructor(param0: io.sentry.protocol.SentryId, param1: io.sentry.protocol.SdkVersion);
			public constructor();
		}
	}
}

declare module io {
	export module sentry {
		export class SentryEnvelopeHeaderAdapter extends com.google.gson.TypeAdapter<io.sentry.SentryEnvelopeHeader> {
			public static class: java.lang.Class<io.sentry.SentryEnvelopeHeaderAdapter>;
			public write(param0: com.google.gson.stream.JsonWriter, param1: io.sentry.SentryEnvelopeHeader): void;
			public read(param0: com.google.gson.stream.JsonReader): io.sentry.SentryEnvelopeHeader;
			public constructor();
		}
	}
}

declare module io {
	export module sentry {
		export class SentryEnvelopeItem {
			public static class: java.lang.Class<io.sentry.SentryEnvelopeItem>;
			public static fromAttachment(param0: io.sentry.Attachment, param1: number): io.sentry.SentryEnvelopeItem;
			public static fromEvent(param0: io.sentry.ISerializer, param1: io.sentry.SentryBaseEvent): io.sentry.SentryEnvelopeItem;
			public getTransaction(param0: io.sentry.ISerializer): io.sentry.ITransaction;
			public getData(): androidNative.Array<number>;
			public static fromSession(param0: io.sentry.ISerializer, param1: io.sentry.Session): io.sentry.SentryEnvelopeItem;
			public static fromUserFeedback(param0: io.sentry.ISerializer, param1: io.sentry.UserFeedback): io.sentry.SentryEnvelopeItem;
			public getEvent(param0: io.sentry.ISerializer): io.sentry.SentryEvent;
			public getHeader(): io.sentry.SentryEnvelopeItemHeader;
		}
		export module SentryEnvelopeItem {
			export class CachedItem {
				public static class: java.lang.Class<io.sentry.SentryEnvelopeItem.CachedItem>;
				public getBytes(): androidNative.Array<number>;
				public constructor(param0: java.util.concurrent.Callable<androidNative.Array<number>>);
			}
		}
	}
}

declare module io {
	export module sentry {
		export class SentryEnvelopeItemHeader {
			public static class: java.lang.Class<io.sentry.SentryEnvelopeItemHeader>;
			public getLength(): number;
			public getFileName(): string;
			public getType(): io.sentry.SentryItemType;
			public getContentType(): string;
		}
	}
}

declare module io {
	export module sentry {
		export class SentryEnvelopeItemHeaderAdapter extends com.google.gson.TypeAdapter<io.sentry.SentryEnvelopeItemHeader> {
			public static class: java.lang.Class<io.sentry.SentryEnvelopeItemHeaderAdapter>;
			public read(param0: com.google.gson.stream.JsonReader): io.sentry.SentryEnvelopeItemHeader;
			public constructor();
			public write(param0: com.google.gson.stream.JsonWriter, param1: io.sentry.SentryEnvelopeItemHeader): void;
		}
	}
}

declare module io {
	export module sentry {
		export class SentryEvent extends io.sentry.SentryBaseEvent implements io.sentry.IUnknownPropertiesConsumer {
			public static class: java.lang.Class<io.sentry.SentryEvent>;
			public getThreads(): java.util.List<io.sentry.protocol.SentryThread>;
			public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
			public constructor(param0: java.lang.Throwable);
			public setServerName(param0: string): void;
			public getPlatform(): string;
			public getLogger(): string;
			public getUser(): io.sentry.protocol.User;
			public addBreadcrumb(param0: string): void;
			public setDebugMeta(param0: io.sentry.protocol.DebugMeta): void;
			public setPlatform(param0: string): void;
			public setThreads(param0: java.util.List<io.sentry.protocol.SentryThread>): void;
			public getTimestamp(): java.util.Date;
			public setLevel(param0: io.sentry.SentryLevel): void;
			public constructor(param0: java.util.Date);
			public setExtra(param0: string, param1: any): void;
			public setDist(param0: string): void;
			public setMessage(param0: io.sentry.protocol.Message): void;
			public getExtra(param0: string): any;
			public setLogger(param0: string): void;
			public getDebugMeta(): io.sentry.protocol.DebugMeta;
			public setExceptions(param0: java.util.List<io.sentry.protocol.SentryException>): void;
			public setExtras(param0: java.util.Map<string,any>): void;
			public isErrored(): boolean;
			public removeExtra(param0: string): void;
			public constructor(param0: io.sentry.protocol.SentryId);
			public setTransaction(param0: string): void;
			public setFingerprints(param0: java.util.List<string>): void;
			public constructor();
			public isCrashed(): boolean;
			public getDist(): string;
			public setUser(param0: io.sentry.protocol.User): void;
			public addBreadcrumb(param0: io.sentry.Breadcrumb): void;
			public getExceptions(): java.util.List<io.sentry.protocol.SentryException>;
			public getTransaction(): string;
			public getUnknown(): java.util.Map<string,any>;
			public setModule(param0: string, param1: string): void;
			public setModules(param0: java.util.Map<string,string>): void;
			public getLevel(): io.sentry.SentryLevel;
			public getServerName(): string;
			public setBreadcrumbs(param0: java.util.List<io.sentry.Breadcrumb>): void;
			public getBreadcrumbs(): java.util.List<io.sentry.Breadcrumb>;
			public getModule(param0: string): string;
			public getFingerprints(): java.util.List<string>;
			public removeModule(param0: string): void;
			public getMessage(): io.sentry.protocol.Message;
		}
	}
}

declare module io {
	export module sentry {
		export class SentryExceptionFactory {
			public static class: java.lang.Class<io.sentry.SentryExceptionFactory>;
			public constructor(param0: io.sentry.SentryStackTraceFactory);
		}
	}
}

declare module io {
	export module sentry {
		export class SentryExecutorService extends io.sentry.ISentryExecutorService {
			public static class: java.lang.Class<io.sentry.SentryExecutorService>;
			public submit(param0: java.lang.Runnable): java.util.concurrent.Future<any>;
			public close(param0: number): void;
		}
	}
}

declare module io {
	export module sentry {
		export class SentryItemType {
			public static class: java.lang.Class<io.sentry.SentryItemType>;
			public static Session: io.sentry.SentryItemType;
			public static Event: io.sentry.SentryItemType;
			public static UserFeedback: io.sentry.SentryItemType;
			public static Attachment: io.sentry.SentryItemType;
			public static Transaction: io.sentry.SentryItemType;
			public static Unknown: io.sentry.SentryItemType;
			public static resolve(param0: any): io.sentry.SentryItemType;
			public static values(): androidNative.Array<io.sentry.SentryItemType>;
			public getItemType(): string;
			public static valueOf(param0: string): io.sentry.SentryItemType;
		}
	}
}

declare module io {
	export module sentry {
		export class SentryLevel {
			public static class: java.lang.Class<io.sentry.SentryLevel>;
			public static DEBUG: io.sentry.SentryLevel;
			public static INFO: io.sentry.SentryLevel;
			public static WARNING: io.sentry.SentryLevel;
			public static ERROR: io.sentry.SentryLevel;
			public static FATAL: io.sentry.SentryLevel;
			public static valueOf(param0: string): io.sentry.SentryLevel;
			public static values(): androidNative.Array<io.sentry.SentryLevel>;
		}
	}
}

declare module io {
	export module sentry {
		export class SentryOptions {
			public static class: java.lang.Class<io.sentry.SentryOptions>;
			public getBeforeBreadcrumb(): io.sentry.SentryOptions.BeforeBreadcrumbCallback;
			public getMaxAttachmentSize(): number;
			public isDebug(): boolean;
			public setEnableExternalConfiguration(param0: boolean): void;
			public getRelease(): string;
			public setEnableScopeSync(param0: boolean): void;
			public setEnableSessionTracking(param0: boolean): void;
			public setMaxQueueSize(param0: number): void;
			public setLogger(param0: io.sentry.ILogger): void;
			public getMaxQueueSize(): number;
			public setSerializer(param0: io.sentry.ISerializer): void;
			public getConnectionTimeoutMillis(): number;
			public getReadTimeoutMillis(): number;
			public addIntegration(param0: io.sentry.Integration): void;
			public getDistinctId(): string;
			public getLogger(): io.sentry.ILogger;
			public constructor();
			public setDistinctId(param0: string): void;
			public getDiagnosticLevel(): io.sentry.SentryLevel;
			public getDist(): string;
			public setHostnameVerifier(param0: javax.net.ssl.HostnameVerifier): void;
			public getEventProcessors(): java.util.List<io.sentry.EventProcessor>;
			public setDebug(param0: java.lang.Boolean): void;
			public setEnvironment(param0: string): void;
			public setTransportFactory(param0: io.sentry.ITransportFactory): void;
			public getServerName(): string;
			public getFlushTimeoutMillis(): number;
			public isEnableUncaughtExceptionHandler(): boolean;
			public setSendDefaultPii(param0: boolean): void;
			public getShutdownTimeout(): number;
			public setAttachServerName(param0: boolean): void;
			public getProxy(): io.sentry.SentryOptions.Proxy;
			public isSendDefaultPii(): boolean;
			public setTransportGate(param0: io.sentry.transport.ITransportGate): void;
			public setConnectionTimeoutMillis(param0: number): void;
			public getTransportGate(): io.sentry.transport.ITransportGate;
			public setAttachThreads(param0: boolean): void;
			public getSdkVersion(): io.sentry.protocol.SdkVersion;
			public setShutdownTimeout(param0: number): void;
			public setDist(param0: string): void;
			public getDsn(): string;
			public setProxy(param0: io.sentry.SentryOptions.Proxy): void;
			public getSampleRate(): java.lang.Double;
			public getCacheDirSize(): number;
			public setEnvelopeReader(param0: io.sentry.IEnvelopeReader): void;
			public setSampleRate(param0: java.lang.Double): void;
			public getIntegrations(): java.util.List<io.sentry.Integration>;
			public setReadTimeoutMillis(param0: number): void;
			public setMaxAttachmentSize(param0: number): void;
			public setEnableNdk(param0: boolean): void;
			public setTracesSampler(param0: io.sentry.SentryOptions.TracesSamplerCallback): void;
			public setSdkVersion(param0: io.sentry.protocol.SdkVersion): void;
			public setEnableDeduplication(param0: java.lang.Boolean): void;
			public getTracesSampler(): io.sentry.SentryOptions.TracesSamplerCallback;
			public setEnableUncaughtExceptionHandler(param0: java.lang.Boolean): void;
			public setServerName(param0: string): void;
			public setTracesSampleRate(param0: java.lang.Double): void;
			public isEnableSessionTracking(): boolean;
			public getInAppIncludes(): java.util.List<string>;
			public getTransportFactory(): io.sentry.ITransportFactory;
			public setSentryClientName(param0: string): void;
			public isEnableExternalConfiguration(): boolean;
			public addInAppInclude(param0: string): void;
			public getEnvelopeDiskCache(): io.sentry.cache.IEnvelopeCache;
			public getMaxBreadcrumbs(): number;
			public isEnableNdk(): boolean;
			public isEnableDeduplication(): boolean;
			public setAttachStacktrace(param0: boolean): void;
			public isEnableScopeSync(): boolean;
			public getSerializer(): io.sentry.ISerializer;
			public getOutboxPath(): string;
			public setEnvelopeDiskCache(param0: io.sentry.cache.IEnvelopeCache): void;
			public getEnvelopeReader(): io.sentry.IEnvelopeReader;
			public setRelease(param0: string): void;
			public setCacheDirSize(param0: number): void;
			public getSentryClientName(): string;
			public addScopeObserver(param0: io.sentry.IScopeObserver): void;
			public getCacheDirPath(): string;
			public setBeforeBreadcrumb(param0: io.sentry.SentryOptions.BeforeBreadcrumbCallback): void;
			public setSslSocketFactory(param0: javax.net.ssl.SSLSocketFactory): void;
			public addInAppExclude(param0: string): void;
			public isAttachThreads(): boolean;
			public setBeforeSend(param0: io.sentry.SentryOptions.BeforeSendCallback): void;
			public setCacheDirPath(param0: string): void;
			public getSessionTrackingIntervalMillis(): number;
			public setFlushTimeoutMillis(param0: number): void;
			public getTracesSampleRate(): java.lang.Double;
			public getTags(): java.util.Map<string,string>;
			public getInAppExcludes(): java.util.List<string>;
			public setSessionTrackingIntervalMillis(param0: number): void;
			public getEnableUncaughtExceptionHandler(): java.lang.Boolean;
			public getHostnameVerifier(): javax.net.ssl.HostnameVerifier;
			public getEnvironment(): string;
			public setTag(param0: string, param1: string): void;
			public getBeforeSend(): io.sentry.SentryOptions.BeforeSendCallback;
			public setDsn(param0: string): void;
			public isAttachServerName(): boolean;
			public isAttachStacktrace(): boolean;
			public getSslSocketFactory(): javax.net.ssl.SSLSocketFactory;
			public setMaxBreadcrumbs(param0: number): void;
			public setDiagnosticLevel(param0: io.sentry.SentryLevel): void;
			public addEventProcessor(param0: io.sentry.EventProcessor): void;
			public static from(param0: io.sentry.config.PropertiesProvider): io.sentry.SentryOptions;
		}
		export module SentryOptions {
			export class BeforeBreadcrumbCallback {
				public static class: java.lang.Class<io.sentry.SentryOptions.BeforeBreadcrumbCallback>;
				/**
				 * Constructs a new instance of the io.sentry.SentryOptions$BeforeBreadcrumbCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					execute(param0: io.sentry.Breadcrumb, param1: any): io.sentry.Breadcrumb;
				});
				public constructor();
				public execute(param0: io.sentry.Breadcrumb, param1: any): io.sentry.Breadcrumb;
			}
			export class BeforeSendCallback {
				public static class: java.lang.Class<io.sentry.SentryOptions.BeforeSendCallback>;
				/**
				 * Constructs a new instance of the io.sentry.SentryOptions$BeforeSendCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					execute(param0: io.sentry.SentryEvent, param1: any): io.sentry.SentryEvent;
				});
				public constructor();
				public execute(param0: io.sentry.SentryEvent, param1: any): io.sentry.SentryEvent;
			}
			export class Proxy {
				public static class: java.lang.Class<io.sentry.SentryOptions.Proxy>;
				public getPort(): string;
				public getPass(): string;
				public getUser(): string;
				public setPass(param0: string): void;
				public setUser(param0: string): void;
				public constructor(param0: string, param1: string, param2: string, param3: string);
				public getHost(): string;
				public setHost(param0: string): void;
				public setPort(param0: string): void;
				public constructor(param0: string, param1: string);
				public constructor();
			}
			export class TracesSamplerCallback {
				public static class: java.lang.Class<io.sentry.SentryOptions.TracesSamplerCallback>;
				/**
				 * Constructs a new instance of the io.sentry.SentryOptions$TracesSamplerCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					sample(param0: io.sentry.SamplingContext): java.lang.Double;
				});
				public constructor();
				public sample(param0: io.sentry.SamplingContext): java.lang.Double;
			}
		}
	}
}

declare module io {
	export module sentry {
		export class SentryStackTraceFactory {
			public static class: java.lang.Class<io.sentry.SentryStackTraceFactory>;
			public constructor(param0: java.util.List<string>, param1: java.util.List<string>);
		}
	}
}

declare module io {
	export module sentry {
		export class SentryThreadFactory {
			public static class: java.lang.Class<io.sentry.SentryThreadFactory>;
			public constructor(param0: io.sentry.SentryStackTraceFactory, param1: io.sentry.SentryOptions);
		}
	}
}

declare module io {
	export module sentry {
		export class SentryTraceHeader {
			public static class: java.lang.Class<io.sentry.SentryTraceHeader>;
			public static SENTRY_TRACE_HEADER: string;
			public getName(): string;
			public isSampled(): java.lang.Boolean;
			public constructor(param0: io.sentry.protocol.SentryId, param1: io.sentry.SpanId, param2: java.lang.Boolean);
			public getValue(): string;
			public getTraceId(): io.sentry.protocol.SentryId;
			public constructor(param0: string);
			public getSpanId(): io.sentry.SpanId;
		}
	}
}

declare module io {
	export module sentry {
		export class SentryTransaction extends io.sentry.SentryBaseEvent implements io.sentry.ITransaction {
			public static class: java.lang.Class<io.sentry.SentryTransaction>;
			public constructor(param0: string, param1: string, param2: io.sentry.IHub);
			public getEventId(): io.sentry.protocol.SentryId;
			public finish(): void;
			public getContexts(): io.sentry.protocol.Contexts;
			public setStatus(param0: io.sentry.SpanStatus): void;
			public isFinished(): boolean;
			public getStatus(): io.sentry.SpanStatus;
			public toSentryTrace(): io.sentry.SentryTraceHeader;
			public getOperation(): string;
			public setThrowable(param0: java.lang.Throwable): void;
			public setTag(param0: string, param1: string): void;
			public setRequest(param0: io.sentry.protocol.Request): void;
			public setOperation(param0: string): void;
			public constructor(param0: io.sentry.protocol.SentryId);
			public startChild(param0: string, param1: string): io.sentry.ISpan;
			public setDescription(param0: string): void;
			public finish(param0: io.sentry.SpanStatus): void;
			public constructor();
			public getSpanContext(): io.sentry.SpanContext;
			public getLatestActiveSpan(): io.sentry.Span;
			public getRequest(): io.sentry.protocol.Request;
			public getTransaction(): string;
			public getThrowable(): java.lang.Throwable;
			public getName(): string;
			public getSpans(): java.util.List<io.sentry.Span>;
			public isSampled(): java.lang.Boolean;
			public getDescription(): string;
			public startChild(param0: string): io.sentry.ISpan;
			public constructor(param0: string, param1: io.sentry.SpanContext, param2: io.sentry.IHub);
			public setName(param0: string): void;
		}
	}
}

declare module io {
	export module sentry {
		export class SentryValues<T>  extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.SentryValues<any>>;
			public getValues(): java.util.List<T>;
		}
	}
}

declare module io {
	export module sentry {
		export class Session {
			public static class: java.lang.Class<io.sentry.Session>;
			public end(param0: java.util.Date): void;
			public constructor(param0: io.sentry.Session.State, param1: java.util.Date, param2: java.util.Date, param3: number, param4: string, param5: java.util.UUID, param6: java.lang.Boolean, param7: java.lang.Long, param8: java.lang.Double, param9: string, param10: string, param11: string, param12: string);
			public setInitAsTrue(): void;
			public getDistinctId(): string;
			public end(): void;
			public getUserAgent(): string;
			public getStarted(): java.util.Date;
			public getSessionId(): java.util.UUID;
			public errorCount(): number;
			public update(param0: io.sentry.Session.State, param1: string, param2: boolean): boolean;
			public getIpAddress(): string;
			public getDuration(): java.lang.Double;
			public getInit(): java.lang.Boolean;
			public getRelease(): string;
			public constructor(param0: string, param1: io.sentry.protocol.User, param2: string, param3: string);
			public getSequence(): java.lang.Long;
			public getStatus(): io.sentry.Session.State;
			public getTimestamp(): java.util.Date;
			public clone(): io.sentry.Session;
			public getEnvironment(): string;
		}
		export module Session {
			export class State {
				public static class: java.lang.Class<io.sentry.Session.State>;
				public static Ok: io.sentry.Session.State;
				public static Exited: io.sentry.Session.State;
				public static Crashed: io.sentry.Session.State;
				public static Abnormal: io.sentry.Session.State;
				public static valueOf(param0: string): io.sentry.Session.State;
				public static values(): androidNative.Array<io.sentry.Session.State>;
			}
		}
	}
}

declare module io {
	export module sentry {
		export class SessionAdapter extends com.google.gson.TypeAdapter<io.sentry.Session> {
			public static class: java.lang.Class<io.sentry.SessionAdapter>;
			public read(param0: com.google.gson.stream.JsonReader): io.sentry.Session;
			public write(param0: com.google.gson.stream.JsonWriter, param1: io.sentry.Session): void;
			public constructor(param0: io.sentry.ILogger);
		}
	}
}

declare module io {
	export module sentry {
		export class ShutdownHookIntegration extends io.sentry.Integration {
			public static class: java.lang.Class<io.sentry.ShutdownHookIntegration>;
			public register(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): void;
			public constructor();
			public constructor(param0: java.lang.Runtime);
		}
	}
}

declare module io {
	export module sentry {
		export class Span extends io.sentry.SpanContext implements io.sentry.ISpan {
			public static class: java.lang.Class<io.sentry.Span>;
			public setOperation(param0: string): void;
			public startChild(param0: string, param1: string): io.sentry.ISpan;
			public finish(): void;
			public setDescription(param0: string): void;
			public finish(param0: io.sentry.SpanStatus): void;
			public getSpanContext(): io.sentry.SpanContext;
			public setStatus(param0: io.sentry.SpanStatus): void;
			public getThrowable(): java.lang.Throwable;
			public isFinished(): boolean;
			public getTimestamp(): java.util.Date;
			public getStatus(): io.sentry.SpanStatus;
			public toSentryTrace(): io.sentry.SentryTraceHeader;
			public getOperation(): string;
			public getDescription(): string;
			public getStartTimestamp(): java.util.Date;
			public startChild(param0: string): io.sentry.ISpan;
			public setThrowable(param0: java.lang.Throwable): void;
			public setTag(param0: string, param1: string): void;
		}
	}
}

declare module io {
	export module sentry {
		export class SpanContext {
			public static class: java.lang.Class<io.sentry.SpanContext>;
			public static TYPE: string;
			public op: string;
			public description: string;
			public status: io.sentry.SpanStatus;
			public tags: java.util.Map<string,string>;
			public constructor(param0: io.sentry.protocol.SentryId, param1: io.sentry.SpanId, param2: string, param3: io.sentry.SpanId, param4: java.lang.Boolean);
			public setOperation(param0: string): void;
			public getSampled(): java.lang.Boolean;
			public setDescription(param0: string): void;
			public constructor(param0: string, param1: java.lang.Boolean);
			public getTraceId(): io.sentry.protocol.SentryId;
			public getSpanId(): io.sentry.SpanId;
			public setStatus(param0: io.sentry.SpanStatus): void;
			public getParentSpanId(): io.sentry.SpanId;
			public getTags(): java.util.Map<string,string>;
			public getStatus(): io.sentry.SpanStatus;
			public getOperation(): string;
			public getDescription(): string;
			public clone(): io.sentry.SpanContext;
			public constructor(param0: string);
			public setTag(param0: string, param1: string): void;
		}
	}
}

declare module io {
	export module sentry {
		export class SpanId {
			public static class: java.lang.Class<io.sentry.SpanId>;
			public static EMPTY_ID: io.sentry.SpanId;
			public equals(param0: any): boolean;
			public toString(): string;
			public constructor();
			public constructor(param0: string);
			public hashCode(): number;
		}
	}
}

declare module io {
	export module sentry {
		export class SpanStatus {
			public static class: java.lang.Class<io.sentry.SpanStatus>;
			public static OK: io.sentry.SpanStatus;
			public static CANCELLED: io.sentry.SpanStatus;
			public static INTERNAL_ERROR: io.sentry.SpanStatus;
			public static UNKNOWN: io.sentry.SpanStatus;
			public static UNKNOWN_ERROR: io.sentry.SpanStatus;
			public static INVALID_ARGUMENT: io.sentry.SpanStatus;
			public static DEADLINE_EXCEEDED: io.sentry.SpanStatus;
			public static NOT_FOUND: io.sentry.SpanStatus;
			public static ALREADY_EXISTS: io.sentry.SpanStatus;
			public static PERMISSION_DENIED: io.sentry.SpanStatus;
			public static RESOURCE_EXHAUSTED: io.sentry.SpanStatus;
			public static FAILED_PRECONDITION: io.sentry.SpanStatus;
			public static ABORTED: io.sentry.SpanStatus;
			public static OUT_OF_RANGE: io.sentry.SpanStatus;
			public static UNIMPLEMENTED: io.sentry.SpanStatus;
			public static UNAVAILABLE: io.sentry.SpanStatus;
			public static DATA_LOSS: io.sentry.SpanStatus;
			public static UNAUTHENTICATED: io.sentry.SpanStatus;
			public static valueOf(param0: string): io.sentry.SpanStatus;
			public static fromHttpStatusCode(param0: number): io.sentry.SpanStatus;
			public static fromHttpStatusCode(param0: number, param1: io.sentry.SpanStatus): io.sentry.SpanStatus;
			public static values(): androidNative.Array<io.sentry.SpanStatus>;
		}
	}
}

declare module io {
	export module sentry {
		export class Stack {
			public static class: java.lang.Class<io.sentry.Stack>;
			public constructor(param0: io.sentry.ILogger, param1: io.sentry.Stack.StackItem);
			public constructor(param0: io.sentry.Stack);
		}
		export module Stack {
			export class StackItem {
				public static class: java.lang.Class<io.sentry.Stack.StackItem>;
				public getOptions(): io.sentry.SentryOptions;
				public getClient(): io.sentry.ISentryClient;
				public getScope(): io.sentry.Scope;
				public setClient(param0: io.sentry.ISentryClient): void;
			}
		}
	}
}

declare module io {
	export module sentry {
		export class SynchronizedCollection<E>  extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.SynchronizedCollection<any>>;
			public clear(): void;
			public equals(param0: any): boolean;
			public isEmpty(): boolean;
			public iterator(): java.util.Iterator<E>;
			public size(): number;
			public decorated(): java.util.Collection<E>;
			public add(param0: E): boolean;
			public static synchronizedCollection(param0: java.util.Collection): io.sentry.SynchronizedCollection<any>;
			public addAll(param0: java.util.Collection<any>): boolean;
			public retainAll(param0: java.util.Collection<any>): boolean;
			public remove(param0: any): boolean;
			public containsAll(param0: java.util.Collection<any>): boolean;
			public toArray(): androidNative.Array<any>;
			public contains(param0: any): boolean;
			public toString(): string;
			public removeAll(param0: java.util.Collection<any>): boolean;
			public toArray(param0: androidNative.Array<any>): androidNative.Array<any>;
			public hashCode(): number;
		}
	}
}

declare module io {
	export module sentry {
		export class SynchronizedQueue<E>  extends io.sentry.SynchronizedCollection<any> implements java.util.Queue<any>  {
			public static class: java.lang.Class<io.sentry.SynchronizedQueue<any>>;
			public peek(): any;
			public remove(param0: any): boolean;
			public constructor(param0: java.util.Queue<any>, param1: any);
			public equals(param0: any): boolean;
			public decorated(): java.util.Queue<any>;
			public offer(param0: any): boolean;
			public remove(): any;
			public poll(): any;
			public decorated(): java.util.Collection<any>;
			public element(): any;
			public hashCode(): number;
		}
	}
}

declare module io {
	export module sentry {
		export class SystemOutLogger extends io.sentry.ILogger {
			public static class: java.lang.Class<io.sentry.SystemOutLogger>;
			public log(param0: io.sentry.SentryLevel, param1: string, param2: java.lang.Throwable): void;
			public isEnabled(param0: io.sentry.SentryLevel): boolean;
			public log(param0: io.sentry.SentryLevel, param1: java.lang.Throwable, param2: string, param3: androidNative.Array<any>): void;
			public constructor();
			public log(param0: io.sentry.SentryLevel, param1: string, param2: androidNative.Array<any>): void;
		}
	}
}

declare module io {
	export module sentry {
		export class TracesSampler {
			public static class: java.lang.Class<io.sentry.TracesSampler>;
			public constructor(param0: io.sentry.SentryOptions);
		}
	}
}

declare module io {
	export module sentry {
		export class TransactionContext extends io.sentry.SpanContext {
			public static class: java.lang.Class<io.sentry.TransactionContext>;
			public static fromSentryTrace(param0: string, param1: string, param2: io.sentry.SentryTraceHeader): io.sentry.TransactionContext;
			public constructor(param0: string, param1: string);
			public constructor(param0: io.sentry.protocol.SentryId, param1: io.sentry.SpanId, param2: string, param3: io.sentry.SpanId, param4: java.lang.Boolean);
			public getName(): string;
			public constructor(param0: string, param1: string, param2: java.lang.Boolean);
			public constructor(param0: string, param1: java.lang.Boolean);
			public setParentSampled(param0: java.lang.Boolean): void;
			public getParentSampled(): java.lang.Boolean;
			public constructor(param0: string);
		}
	}
}

declare module io {
	export module sentry {
		export class UncaughtExceptionHandler {
			public static class: java.lang.Class<io.sentry.UncaughtExceptionHandler>;
			/**
			 * Constructs a new instance of the io.sentry.UncaughtExceptionHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getDefaultUncaughtExceptionHandler(): java.lang.Thread.UncaughtExceptionHandler;
				setDefaultUncaughtExceptionHandler(param0: java.lang.Thread.UncaughtExceptionHandler): void;
			});
			public constructor();
			public getDefaultUncaughtExceptionHandler(): java.lang.Thread.UncaughtExceptionHandler;
			public setDefaultUncaughtExceptionHandler(param0: java.lang.Thread.UncaughtExceptionHandler): void;
		}
		export module UncaughtExceptionHandler {
			export class Adapter extends io.sentry.UncaughtExceptionHandler {
				public static class: java.lang.Class<io.sentry.UncaughtExceptionHandler.Adapter>;
				public setDefaultUncaughtExceptionHandler(param0: java.lang.Thread.UncaughtExceptionHandler): void;
				public getDefaultUncaughtExceptionHandler(): java.lang.Thread.UncaughtExceptionHandler;
			}
		}
	}
}

declare module io {
	export module sentry {
		export class UncaughtExceptionHandlerIntegration extends io.sentry.Integration {
			public static class: java.lang.Class<io.sentry.UncaughtExceptionHandlerIntegration>;
			public register(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): void;
			public constructor();
			public uncaughtException(param0: java.lang.Thread, param1: java.lang.Throwable): void;
			public close(): void;
		}
		export module UncaughtExceptionHandlerIntegration {
			export class UncaughtExceptionHint implements io.sentry.hints.DiskFlushNotification, io.sentry.hints.Flushable, io.sentry.hints.SessionEnd {
				public static class: java.lang.Class<io.sentry.UncaughtExceptionHandlerIntegration.UncaughtExceptionHint>;
				public markFlushed(): void;
				public waitFlush(): boolean;
			}
		}
	}
}

declare module io {
	export module sentry {
		export class UnknownPropertiesTypeAdapterFactory {
			public static class: java.lang.Class<io.sentry.UnknownPropertiesTypeAdapterFactory>;
			public create(param0: com.google.gson.Gson, param1: com.google.gson.reflect.TypeToken): com.google.gson.TypeAdapter;
		}
		export module UnknownPropertiesTypeAdapterFactory {
			export class UnknownPropertiesTypeAdapter<T>  extends com.google.gson.TypeAdapter<any> {
				public static class: java.lang.Class<io.sentry.UnknownPropertiesTypeAdapterFactory.UnknownPropertiesTypeAdapter<any>>;
				public read(param0: com.google.gson.stream.JsonReader): any;
				public write(param0: com.google.gson.stream.JsonWriter, param1: any): void;
			}
		}
	}
}

declare module io {
	export module sentry {
		export class UserFeedback {
			public static class: java.lang.Class<io.sentry.UserFeedback>;
			public setEmail(param0: string): void;
			public toString(): string;
			public getEventId(): io.sentry.protocol.SentryId;
			public getName(): string;
			public constructor(param0: io.sentry.protocol.SentryId);
			public getComments(): string;
			public setComments(param0: string): void;
			public constructor(param0: io.sentry.protocol.SentryId, param1: string, param2: string, param3: string);
			public setName(param0: string): void;
			public getEmail(): string;
		}
	}
}

declare module io {
	export module sentry {
		export module adapters {
			export class CollectionAdapter extends com.google.gson.JsonSerializer<java.util.Collection<any>> {
				public static class: java.lang.Class<io.sentry.adapters.CollectionAdapter>;
				public serialize(param0: java.util.Collection<any>, param1: java.lang.reflect.Type, param2: com.google.gson.JsonSerializationContext): com.google.gson.JsonElement;
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export module adapters {
			export class ContextsDeserializerAdapter extends com.google.gson.JsonDeserializer<io.sentry.protocol.Contexts> {
				public static class: java.lang.Class<io.sentry.adapters.ContextsDeserializerAdapter>;
				public constructor(param0: io.sentry.ILogger);
				public deserialize(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type, param2: com.google.gson.JsonDeserializationContext): io.sentry.protocol.Contexts;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module adapters {
			export class ContextsSerializerAdapter extends com.google.gson.JsonSerializer<io.sentry.protocol.Contexts> {
				public static class: java.lang.Class<io.sentry.adapters.ContextsSerializerAdapter>;
				public serialize(param0: io.sentry.protocol.Contexts, param1: java.lang.reflect.Type, param2: com.google.gson.JsonSerializationContext): com.google.gson.JsonElement;
				public constructor(param0: io.sentry.ILogger);
			}
		}
	}
}

declare module io {
	export module sentry {
		export module adapters {
			export class DateDeserializerAdapter extends com.google.gson.JsonDeserializer<java.util.Date> {
				public static class: java.lang.Class<io.sentry.adapters.DateDeserializerAdapter>;
				public deserialize(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type, param2: com.google.gson.JsonDeserializationContext): java.util.Date;
				public constructor(param0: io.sentry.ILogger);
			}
		}
	}
}

declare module io {
	export module sentry {
		export module adapters {
			export class DateSerializerAdapter extends com.google.gson.JsonSerializer<java.util.Date> {
				public static class: java.lang.Class<io.sentry.adapters.DateSerializerAdapter>;
				public constructor(param0: io.sentry.ILogger);
				public serialize(param0: java.util.Date, param1: java.lang.reflect.Type, param2: com.google.gson.JsonSerializationContext): com.google.gson.JsonElement;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module adapters {
			export class MapAdapter extends com.google.gson.JsonSerializer<java.util.Map<string,any>> {
				public static class: java.lang.Class<io.sentry.adapters.MapAdapter>;
				public serialize(param0: java.util.Map<string,any>, param1: java.lang.reflect.Type, param2: com.google.gson.JsonSerializationContext): com.google.gson.JsonElement;
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export module adapters {
			export class OrientationDeserializerAdapter extends com.google.gson.JsonDeserializer<io.sentry.protocol.Device.DeviceOrientation> {
				public static class: java.lang.Class<io.sentry.adapters.OrientationDeserializerAdapter>;
				public deserialize(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type, param2: com.google.gson.JsonDeserializationContext): io.sentry.protocol.Device.DeviceOrientation;
				public constructor(param0: io.sentry.ILogger);
			}
		}
	}
}

declare module io {
	export module sentry {
		export module adapters {
			export class OrientationSerializerAdapter extends com.google.gson.JsonSerializer<io.sentry.protocol.Device.DeviceOrientation> {
				public static class: java.lang.Class<io.sentry.adapters.OrientationSerializerAdapter>;
				public constructor(param0: io.sentry.ILogger);
				public serialize(param0: io.sentry.protocol.Device.DeviceOrientation, param1: java.lang.reflect.Type, param2: com.google.gson.JsonSerializationContext): com.google.gson.JsonElement;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module adapters {
			export class SentryIdDeserializerAdapter extends com.google.gson.JsonDeserializer<io.sentry.protocol.SentryId> {
				public static class: java.lang.Class<io.sentry.adapters.SentryIdDeserializerAdapter>;
				public constructor(param0: io.sentry.ILogger);
				public deserialize(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type, param2: com.google.gson.JsonDeserializationContext): io.sentry.protocol.SentryId;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module adapters {
			export class SentryIdSerializerAdapter extends com.google.gson.JsonSerializer<io.sentry.protocol.SentryId> {
				public static class: java.lang.Class<io.sentry.adapters.SentryIdSerializerAdapter>;
				public constructor(param0: io.sentry.ILogger);
				public serialize(param0: io.sentry.protocol.SentryId, param1: java.lang.reflect.Type, param2: com.google.gson.JsonSerializationContext): com.google.gson.JsonElement;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module adapters {
			export class SentryLevelDeserializerAdapter extends com.google.gson.JsonDeserializer<io.sentry.SentryLevel> {
				public static class: java.lang.Class<io.sentry.adapters.SentryLevelDeserializerAdapter>;
				public constructor(param0: io.sentry.ILogger);
				public deserialize(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type, param2: com.google.gson.JsonDeserializationContext): io.sentry.SentryLevel;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module adapters {
			export class SentryLevelSerializerAdapter extends com.google.gson.JsonSerializer<io.sentry.SentryLevel> {
				public static class: java.lang.Class<io.sentry.adapters.SentryLevelSerializerAdapter>;
				public constructor(param0: io.sentry.ILogger);
				public serialize(param0: io.sentry.SentryLevel, param1: java.lang.reflect.Type, param2: com.google.gson.JsonSerializationContext): com.google.gson.JsonElement;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module adapters {
			export class SpanIdDeserializerAdapter extends com.google.gson.JsonDeserializer<io.sentry.SpanId> {
				public static class: java.lang.Class<io.sentry.adapters.SpanIdDeserializerAdapter>;
				public deserialize(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type, param2: com.google.gson.JsonDeserializationContext): io.sentry.SpanId;
				public constructor(param0: io.sentry.ILogger);
			}
		}
	}
}

declare module io {
	export module sentry {
		export module adapters {
			export class SpanIdSerializerAdapter extends com.google.gson.JsonSerializer<io.sentry.SpanId> {
				public static class: java.lang.Class<io.sentry.adapters.SpanIdSerializerAdapter>;
				public constructor(param0: io.sentry.ILogger);
				public serialize(param0: io.sentry.SpanId, param1: java.lang.reflect.Type, param2: com.google.gson.JsonSerializationContext): com.google.gson.JsonElement;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module adapters {
			export class SpanStatusDeserializerAdapter extends com.google.gson.JsonDeserializer<io.sentry.SpanStatus> {
				public static class: java.lang.Class<io.sentry.adapters.SpanStatusDeserializerAdapter>;
				public constructor(param0: io.sentry.ILogger);
				public deserialize(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type, param2: com.google.gson.JsonDeserializationContext): io.sentry.SpanStatus;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module adapters {
			export class SpanStatusSerializerAdapter extends com.google.gson.JsonSerializer<io.sentry.SpanStatus> {
				public static class: java.lang.Class<io.sentry.adapters.SpanStatusSerializerAdapter>;
				public constructor(param0: io.sentry.ILogger);
				public serialize(param0: io.sentry.SpanStatus, param1: java.lang.reflect.Type, param2: com.google.gson.JsonSerializationContext): com.google.gson.JsonElement;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module adapters {
			export class TimeZoneDeserializerAdapter extends com.google.gson.JsonDeserializer<java.util.TimeZone> {
				public static class: java.lang.Class<io.sentry.adapters.TimeZoneDeserializerAdapter>;
				public constructor(param0: io.sentry.ILogger);
				public deserialize(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type, param2: com.google.gson.JsonDeserializationContext): java.util.TimeZone;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module adapters {
			export class TimeZoneSerializerAdapter extends com.google.gson.JsonSerializer<java.util.TimeZone> {
				public static class: java.lang.Class<io.sentry.adapters.TimeZoneSerializerAdapter>;
				public constructor(param0: io.sentry.ILogger);
				public serialize(param0: java.util.TimeZone, param1: java.lang.reflect.Type, param2: com.google.gson.JsonSerializationContext): com.google.gson.JsonElement;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class ANRWatchDog {
					public static class: java.lang.Class<io.sentry.android.core.ANRWatchDog>;
					public run(): void;
				}
				export module ANRWatchDog {
					export class ANRListener {
						public static class: java.lang.Class<io.sentry.android.core.ANRWatchDog.ANRListener>;
						/**
						 * Constructs a new instance of the io.sentry.android.core.ANRWatchDog$ANRListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onAppNotResponding(param0: io.sentry.android.core.ApplicationNotResponding): void;
						});
						public constructor();
						public onAppNotResponding(param0: io.sentry.android.core.ApplicationNotResponding): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class ActivityLifecycleIntegration extends io.sentry.Integration {
					public static class: java.lang.Class<io.sentry.android.core.ActivityLifecycleIntegration>;
					public onActivityPostResumed(param0: globalAndroid.app.Activity): void;
					public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
					public onActivityStarted(param0: globalAndroid.app.Activity): void;
					public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
					public register(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): void;
					public onActivityStopped(param0: globalAndroid.app.Activity): void;
					public close(): void;
					public onActivityPreCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
					public constructor(param0: globalAndroid.app.Application);
					public onActivityResumed(param0: globalAndroid.app.Activity): void;
					public onActivityPaused(param0: globalAndroid.app.Activity): void;
					public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class AndroidLogger extends io.sentry.ILogger {
					public static class: java.lang.Class<io.sentry.android.core.AndroidLogger>;
					public log(param0: io.sentry.SentryLevel, param1: string, param2: java.lang.Throwable): void;
					public log(param0: io.sentry.SentryLevel, param1: string, param2: androidNative.Array<any>): void;
					public log(param0: io.sentry.SentryLevel, param1: java.lang.Throwable, param2: string, param3: androidNative.Array<any>): void;
					public isEnabled(param0: io.sentry.SentryLevel): boolean;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class AndroidOptionsInitializer {
					public static class: java.lang.Class<io.sentry.android.core.AndroidOptionsInitializer>;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class AndroidTransportGate extends io.sentry.transport.ITransportGate {
					public static class: java.lang.Class<io.sentry.android.core.AndroidTransportGate>;
					public isConnected(): boolean;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class AnrIntegration extends io.sentry.Integration {
					public static class: java.lang.Class<io.sentry.android.core.AnrIntegration>;
					public constructor(param0: globalAndroid.content.Context);
					public register(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): void;
					public close(): void;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class AppComponentsBreadcrumbsIntegration extends io.sentry.Integration {
					public static class: java.lang.Class<io.sentry.android.core.AppComponentsBreadcrumbsIntegration>;
					public constructor(param0: globalAndroid.content.Context);
					public register(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): void;
					public onTrimMemory(param0: number): void;
					public close(): void;
					public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
					public onLowMemory(): void;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class AppLifecycleIntegration extends io.sentry.Integration {
					public static class: java.lang.Class<io.sentry.android.core.AppLifecycleIntegration>;
					public register(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): void;
					public constructor();
					public close(): void;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class ApplicationNotResponding {
					public static class: java.lang.Class<io.sentry.android.core.ApplicationNotResponding>;
					public getThread(): java.lang.Thread;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class BuildConfig {
					public static class: java.lang.Class<io.sentry.android.core.BuildConfig>;
					public static DEBUG: boolean;
					public static LIBRARY_PACKAGE_NAME: string;
					public static BUILD_TYPE: string;
					public static SENTRY_ANDROID_SDK_NAME: string;
					public static VERSION_NAME: string;
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class BuildInfoProvider extends io.sentry.android.core.IBuildInfoProvider {
					public static class: java.lang.Class<io.sentry.android.core.BuildInfoProvider>;
					public constructor();
					public getSdkInfoVersion(): number;
					public getBuildTags(): string;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class ContextUtils {
					public static class: java.lang.Class<io.sentry.android.core.ContextUtils>;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class DefaultAndroidEventProcessor extends io.sentry.EventProcessor {
					public static class: java.lang.Class<io.sentry.android.core.DefaultAndroidEventProcessor>;
					public process(param0: io.sentry.SentryEvent, param1: any): io.sentry.SentryEvent;
					public getDefaultUser(): io.sentry.protocol.User;
					public constructor(param0: globalAndroid.content.Context, param1: io.sentry.ILogger, param2: io.sentry.android.core.IBuildInfoProvider);
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class EnvelopeFileObserver {
					public static class: java.lang.Class<io.sentry.android.core.EnvelopeFileObserver>;
					public onEvent(param0: number, param1: string): void;
				}
				export module EnvelopeFileObserver {
					export class CachedEnvelopeHint implements io.sentry.hints.Cached, io.sentry.hints.Retryable, io.sentry.hints.SubmissionResult, io.sentry.hints.Flushable, io.sentry.hints.ApplyScopeData, io.sentry.hints.Resettable {
						public static class: java.lang.Class<io.sentry.android.core.EnvelopeFileObserver.CachedEnvelopeHint>;
						public isRetry(): boolean;
						public waitFlush(): boolean;
						public isSuccess(): boolean;
						public setResult(param0: boolean): void;
						public setRetry(param0: boolean): void;
						public constructor(param0: number, param1: io.sentry.ILogger);
						public reset(): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export abstract class EnvelopeFileObserverIntegration extends io.sentry.Integration {
					public static class: java.lang.Class<io.sentry.android.core.EnvelopeFileObserverIntegration>;
					public register(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): void;
					public constructor();
					public close(): void;
					public static getOutboxFileObserver(): io.sentry.android.core.EnvelopeFileObserverIntegration;
				}
				export module EnvelopeFileObserverIntegration {
					export class OutboxEnvelopeFileObserverIntegration extends io.sentry.android.core.EnvelopeFileObserverIntegration {
						public static class: java.lang.Class<io.sentry.android.core.EnvelopeFileObserverIntegration.OutboxEnvelopeFileObserverIntegration>;
						public register(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): void;
						public getPath(param0: io.sentry.SentryOptions): string;
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class IBuildInfoProvider {
					public static class: java.lang.Class<io.sentry.android.core.IBuildInfoProvider>;
					/**
					 * Constructs a new instance of the io.sentry.android.core.IBuildInfoProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getSdkInfoVersion(): number;
						getBuildTags(): string;
					});
					public constructor();
					public getSdkInfoVersion(): number;
					public getBuildTags(): string;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class IDebugImagesLoader {
					public static class: java.lang.Class<io.sentry.android.core.IDebugImagesLoader>;
					/**
					 * Constructs a new instance of the io.sentry.android.core.IDebugImagesLoader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						loadDebugImages(): java.util.List<io.sentry.protocol.DebugImage>;
						clearDebugImages(): void;
					});
					public constructor();
					public loadDebugImages(): java.util.List<io.sentry.protocol.DebugImage>;
					public clearDebugImages(): void;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class IHandler {
					public static class: java.lang.Class<io.sentry.android.core.IHandler>;
					/**
					 * Constructs a new instance of the io.sentry.android.core.IHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						post(param0: java.lang.Runnable): void;
						getThread(): java.lang.Thread;
					});
					public constructor();
					public post(param0: java.lang.Runnable): void;
					public getThread(): java.lang.Thread;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class ILoadClass {
					public static class: java.lang.Class<io.sentry.android.core.ILoadClass>;
					/**
					 * Constructs a new instance of the io.sentry.android.core.ILoadClass interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						loadClass(param0: string): java.lang.Class<any>;
					});
					public constructor();
					public loadClass(param0: string): java.lang.Class<any>;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class Installation {
					public static class: java.lang.Class<io.sentry.android.core.Installation>;
					public static id(param0: globalAndroid.content.Context): string;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class LifecycleWatcher {
					public static class: java.lang.Class<io.sentry.android.core.LifecycleWatcher>;
					public onStart(param0: androidx.lifecycle.LifecycleOwner): void;
					public onStop(param0: androidx.lifecycle.LifecycleOwner): void;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class LoadClass extends io.sentry.android.core.ILoadClass {
					public static class: java.lang.Class<io.sentry.android.core.LoadClass>;
					public loadClass(param0: string): java.lang.Class<any>;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class MainLooperHandler extends io.sentry.android.core.IHandler {
					public static class: java.lang.Class<io.sentry.android.core.MainLooperHandler>;
					public post(param0: java.lang.Runnable): void;
					public getThread(): java.lang.Thread;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class ManifestMetadataReader {
					public static class: java.lang.Class<io.sentry.android.core.ManifestMetadataReader>;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class NdkIntegration extends io.sentry.Integration {
					public static class: java.lang.Class<io.sentry.android.core.NdkIntegration>;
					public static SENTRY_NDK_CLASS_NAME: string;
					public constructor(param0: java.lang.Class<any>);
					public register(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): void;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class NoOpDebugImagesLoader extends io.sentry.android.core.IDebugImagesLoader {
					public static class: java.lang.Class<io.sentry.android.core.NoOpDebugImagesLoader>;
					public loadDebugImages(): java.util.List<io.sentry.protocol.DebugImage>;
					public clearDebugImages(): void;
					public static getInstance(): io.sentry.android.core.NoOpDebugImagesLoader;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class PhoneStateBreadcrumbsIntegration extends io.sentry.Integration {
					public static class: java.lang.Class<io.sentry.android.core.PhoneStateBreadcrumbsIntegration>;
					public constructor(param0: globalAndroid.content.Context);
					public register(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): void;
					public close(): void;
				}
				export module PhoneStateBreadcrumbsIntegration {
					export class PhoneStateChangeListener {
						public static class: java.lang.Class<io.sentry.android.core.PhoneStateBreadcrumbsIntegration.PhoneStateChangeListener>;
						public onCallStateChanged(param0: number, param1: string): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class SentryAndroid {
					public static class: java.lang.Class<io.sentry.android.core.SentryAndroid>;
					public static init(param0: globalAndroid.content.Context): void;
					public static init(param0: globalAndroid.content.Context, param1: io.sentry.ILogger): void;
					public static init(param0: globalAndroid.content.Context, param1: io.sentry.Sentry.OptionsConfiguration<io.sentry.android.core.SentryAndroidOptions>): void;
					public static init(param0: globalAndroid.content.Context, param1: io.sentry.ILogger, param2: io.sentry.Sentry.OptionsConfiguration<io.sentry.android.core.SentryAndroidOptions>): void;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class SentryAndroidOptions extends io.sentry.SentryOptions {
					public static class: java.lang.Class<io.sentry.android.core.SentryAndroidOptions>;
					public getDebugImagesLoader(): io.sentry.android.core.IDebugImagesLoader;
					public setEnableAutoActivityLifecycleTracing(param0: boolean): void;
					public isAnrReportInDebug(): boolean;
					public setDebugImagesLoader(param0: io.sentry.android.core.IDebugImagesLoader): void;
					public isEnableAutoActivityLifecycleTracing(): boolean;
					public setEnableAppComponentBreadcrumbs(param0: boolean): void;
					public isEnableSystemEventBreadcrumbs(): boolean;
					public enableAllAutoBreadcrumbs(param0: boolean): void;
					public isEnableAppLifecycleBreadcrumbs(): boolean;
					public isEnableActivityLifecycleBreadcrumbs(): boolean;
					public setAnrReportInDebug(param0: boolean): void;
					public setAnrTimeoutIntervalMillis(param0: number): void;
					public setEnableSystemEventBreadcrumbs(param0: boolean): void;
					public setEnableActivityLifecycleTracingAutoFinish(param0: boolean): void;
					public constructor();
					public setEnableActivityLifecycleBreadcrumbs(param0: boolean): void;
					public isEnableActivityLifecycleTracingAutoFinish(): boolean;
					public isAnrEnabled(): boolean;
					public getAnrTimeoutIntervalMillis(): number;
					public setAnrEnabled(param0: boolean): void;
					public setEnableAppLifecycleBreadcrumbs(param0: boolean): void;
					public isEnableAppComponentBreadcrumbs(): boolean;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class SentryInitProvider {
					public static class: java.lang.Class<io.sentry.android.core.SentryInitProvider>;
					public shutdown(): void;
					public delete(param0: globalAndroid.net.Uri, param1: string, param2: androidNative.Array<string>): number;
					public attachInfo(param0: globalAndroid.content.Context, param1: globalAndroid.content.pm.ProviderInfo): void;
					public constructor();
					public query(param0: globalAndroid.net.Uri, param1: androidNative.Array<string>, param2: string, param3: androidNative.Array<string>, param4: string): globalAndroid.database.Cursor;
					public update(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues, param2: string, param3: androidNative.Array<string>): number;
					public onCreate(): boolean;
					public getType(param0: globalAndroid.net.Uri): string;
					public insert(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues): globalAndroid.net.Uri;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class SystemEventsBreadcrumbsIntegration extends io.sentry.Integration {
					public static class: java.lang.Class<io.sentry.android.core.SystemEventsBreadcrumbsIntegration>;
					public constructor(param0: globalAndroid.content.Context);
					public register(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): void;
					public close(): void;
					public constructor(param0: globalAndroid.content.Context, param1: java.util.List<string>);
				}
				export module SystemEventsBreadcrumbsIntegration {
					export class SystemEventsBroadcastReceiver {
						public static class: java.lang.Class<io.sentry.android.core.SystemEventsBreadcrumbsIntegration.SystemEventsBroadcastReceiver>;
						public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class TempSensorBreadcrumbsIntegration extends io.sentry.Integration {
					public static class: java.lang.Class<io.sentry.android.core.TempSensorBreadcrumbsIntegration>;
					public constructor(param0: globalAndroid.content.Context);
					public onSensorChanged(param0: globalAndroid.hardware.SensorEvent): void;
					public register(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): void;
					public onAccuracyChanged(param0: globalAndroid.hardware.Sensor, param1: number): void;
					public close(): void;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export module util {
					export class ConnectivityChecker {
						public static class: java.lang.Class<io.sentry.android.core.util.ConnectivityChecker>;
						public static getConnectionStatus(param0: globalAndroid.content.Context, param1: io.sentry.ILogger): io.sentry.android.core.util.ConnectivityChecker.Status;
						public static getConnectionType(param0: globalAndroid.content.Context, param1: io.sentry.ILogger, param2: io.sentry.android.core.IBuildInfoProvider): string;
					}
					export module ConnectivityChecker {
						export class Status {
							public static class: java.lang.Class<io.sentry.android.core.util.ConnectivityChecker.Status>;
							public static CONNECTED: io.sentry.android.core.util.ConnectivityChecker.Status;
							public static NOT_CONNECTED: io.sentry.android.core.util.ConnectivityChecker.Status;
							public static NO_PERMISSION: io.sentry.android.core.util.ConnectivityChecker.Status;
							public static UNKNOWN: io.sentry.android.core.util.ConnectivityChecker.Status;
							public static values(): androidNative.Array<io.sentry.android.core.util.ConnectivityChecker.Status>;
							public static valueOf(param0: string): io.sentry.android.core.util.ConnectivityChecker.Status;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export module util {
					export class DeviceOrientations {
						public static class: java.lang.Class<io.sentry.android.core.util.DeviceOrientations>;
						public static getOrientation(param0: number): io.sentry.protocol.Device.DeviceOrientation;
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export module util {
					export class MainThreadChecker {
						public static class: java.lang.Class<io.sentry.android.core.util.MainThreadChecker>;
						public static isMainThread(): boolean;
						public static isMainThread(param0: java.lang.Thread): boolean;
						public static isMainThread(param0: io.sentry.protocol.SentryThread): boolean;
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export module util {
					export class Permissions {
						public static class: java.lang.Class<io.sentry.android.core.util.Permissions>;
						public static hasPermission(param0: globalAndroid.content.Context, param1: string): boolean;
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export module util {
					export class RootChecker {
						public static class: java.lang.Class<io.sentry.android.core.util.RootChecker>;
						public constructor(param0: globalAndroid.content.Context, param1: io.sentry.android.core.IBuildInfoProvider, param2: io.sentry.ILogger);
						public isDeviceRooted(): boolean;
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module cache {
			export abstract class CacheStrategy {
				public static class: java.lang.Class<io.sentry.cache.CacheStrategy>;
				public static UTF_8: java.nio.charset.Charset;
				public options: io.sentry.SentryOptions;
				public serializer: io.sentry.ISerializer;
				public directory: java.io.File;
				public rotateCacheIfNeeded(param0: androidNative.Array<java.io.File>): void;
				public isDirectoryValid(): boolean;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module cache {
			export class EnvelopeCache extends io.sentry.cache.CacheStrategy implements io.sentry.cache.IEnvelopeCache {
				public static class: java.lang.Class<io.sentry.cache.EnvelopeCache>;
				public static SUFFIX_ENVELOPE_FILE: string;
				public static PREFIX_CURRENT_SESSION_FILE: string;
				public constructor(param0: io.sentry.SentryOptions);
				public discard(param0: io.sentry.SentryEnvelope): void;
				public store(param0: io.sentry.SentryEnvelope, param1: any): void;
				public store(param0: io.sentry.SentryEnvelope): void;
				public iterator(): java.util.Iterator<io.sentry.SentryEnvelope>;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module cache {
			export class IEnvelopeCache extends java.lang.Iterable<io.sentry.SentryEnvelope> {
				public static class: java.lang.Class<io.sentry.cache.IEnvelopeCache>;
				/**
				 * Constructs a new instance of the io.sentry.cache.IEnvelopeCache interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					store(param0: io.sentry.SentryEnvelope, param1: any): void;
					store(param0: io.sentry.SentryEnvelope): void;
					discard(param0: io.sentry.SentryEnvelope): void;
				});
				public constructor();
				public discard(param0: io.sentry.SentryEnvelope): void;
				public store(param0: io.sentry.SentryEnvelope, param1: any): void;
				public store(param0: io.sentry.SentryEnvelope): void;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module config {
			export abstract class AbstractPropertiesProvider extends io.sentry.config.PropertiesProvider {
				public static class: java.lang.Class<io.sentry.config.AbstractPropertiesProvider>;
				public constructor(param0: string, param1: java.util.Properties);
				public getProperty(param0: string, param1: string): string;
				public getMap(param0: string): java.util.Map<string,string>;
				public getDoubleProperty(param0: string): java.lang.Double;
				public getProperty(param0: string): string;
				public getList(param0: string): java.util.List<string>;
				public constructor(param0: java.util.Properties);
				public getBooleanProperty(param0: string): java.lang.Boolean;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module config {
			export class ClasspathPropertiesLoader extends io.sentry.config.PropertiesLoader {
				public static class: java.lang.Class<io.sentry.config.ClasspathPropertiesLoader>;
				public constructor(param0: string, param1: java.lang.ClassLoader, param2: io.sentry.ILogger);
				public constructor(param0: io.sentry.ILogger);
				public load(): java.util.Properties;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module config {
			export class CompositePropertiesProvider extends io.sentry.config.PropertiesProvider {
				public static class: java.lang.Class<io.sentry.config.CompositePropertiesProvider>;
				public getProperty(param0: string, param1: string): string;
				public getMap(param0: string): java.util.Map<string,string>;
				public constructor(param0: java.util.List<io.sentry.config.PropertiesProvider>);
				public getDoubleProperty(param0: string): java.lang.Double;
				public getProperty(param0: string): string;
				public getList(param0: string): java.util.List<string>;
				public getBooleanProperty(param0: string): java.lang.Boolean;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module config {
			export class EnvironmentVariablePropertiesProvider extends io.sentry.config.PropertiesProvider {
				public static class: java.lang.Class<io.sentry.config.EnvironmentVariablePropertiesProvider>;
				public getProperty(param0: string, param1: string): string;
				public getMap(param0: string): java.util.Map<string,string>;
				public getDoubleProperty(param0: string): java.lang.Double;
				public getProperty(param0: string): string;
				public getList(param0: string): java.util.List<string>;
				public getBooleanProperty(param0: string): java.lang.Boolean;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module config {
			export class FilesystemPropertiesLoader extends io.sentry.config.PropertiesLoader {
				public static class: java.lang.Class<io.sentry.config.FilesystemPropertiesLoader>;
				public constructor(param0: string, param1: io.sentry.ILogger);
				public load(): java.util.Properties;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module config {
			export class PropertiesLoader {
				public static class: java.lang.Class<io.sentry.config.PropertiesLoader>;
				/**
				 * Constructs a new instance of the io.sentry.config.PropertiesLoader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					load(): java.util.Properties;
				});
				public constructor();
				public load(): java.util.Properties;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module config {
			export class PropertiesProvider {
				public static class: java.lang.Class<io.sentry.config.PropertiesProvider>;
				/**
				 * Constructs a new instance of the io.sentry.config.PropertiesProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getProperty(param0: string): string;
					getMap(param0: string): java.util.Map<string,string>;
					getList(param0: string): java.util.List<string>;
					getProperty(param0: string, param1: string): string;
					getBooleanProperty(param0: string): java.lang.Boolean;
					getDoubleProperty(param0: string): java.lang.Double;
				});
				public constructor();
				public getProperty(param0: string, param1: string): string;
				public getMap(param0: string): java.util.Map<string,string>;
				public getDoubleProperty(param0: string): java.lang.Double;
				public getProperty(param0: string): string;
				public getList(param0: string): java.util.List<string>;
				public getBooleanProperty(param0: string): java.lang.Boolean;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module config {
			export class PropertiesProviderFactory {
				public static class: java.lang.Class<io.sentry.config.PropertiesProviderFactory>;
				public static create(): io.sentry.config.PropertiesProvider;
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export module config {
			export class SimplePropertiesProvider extends io.sentry.config.AbstractPropertiesProvider {
				public static class: java.lang.Class<io.sentry.config.SimplePropertiesProvider>;
				public constructor(param0: string, param1: java.util.Properties);
				public getProperty(param0: string, param1: string): string;
				public getMap(param0: string): java.util.Map<string,string>;
				public getDoubleProperty(param0: string): java.lang.Double;
				public getProperty(param0: string): string;
				public getList(param0: string): java.util.List<string>;
				public constructor(param0: java.util.Properties);
				public getBooleanProperty(param0: string): java.lang.Boolean;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module config {
			export class SystemPropertyPropertiesProvider extends io.sentry.config.AbstractPropertiesProvider {
				public static class: java.lang.Class<io.sentry.config.SystemPropertyPropertiesProvider>;
				public constructor(param0: string, param1: java.util.Properties);
				public getProperty(param0: string, param1: string): string;
				public getMap(param0: string): java.util.Map<string,string>;
				public getDoubleProperty(param0: string): java.lang.Double;
				public getProperty(param0: string): string;
				public getList(param0: string): java.util.List<string>;
				public constructor(param0: java.util.Properties);
				public getBooleanProperty(param0: string): java.lang.Boolean;
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export module exception {
			export class ExceptionMechanismException {
				public static class: java.lang.Class<io.sentry.exception.ExceptionMechanismException>;
				public getThread(): java.lang.Thread;
				public isSnapshot(): boolean;
				public constructor(param0: io.sentry.protocol.Mechanism, param1: java.lang.Throwable, param2: java.lang.Thread);
				public getExceptionMechanism(): io.sentry.protocol.Mechanism;
				public constructor(param0: io.sentry.protocol.Mechanism, param1: java.lang.Throwable, param2: java.lang.Thread, param3: boolean);
				public getThrowable(): java.lang.Throwable;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module exception {
			export class InvalidDsnException {
				public static class: java.lang.Class<io.sentry.exception.InvalidDsnException>;
				public getDsn(): string;
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: string);
				public constructor(param0: string, param1: string);
				public constructor(param0: string, param1: string, param2: java.lang.Throwable);
			}
		}
	}
}

declare module io {
	export module sentry {
		export module exception {
			export class InvalidSentryTraceHeaderException {
				public static class: java.lang.Class<io.sentry.exception.InvalidSentryTraceHeaderException>;
				public getSentryTraceHeader(): string;
				public constructor(param0: string);
			}
		}
	}
}

declare module io {
	export module sentry {
		export module exception {
			export class SentryEnvelopeException {
				public static class: java.lang.Class<io.sentry.exception.SentryEnvelopeException>;
				public constructor(param0: string);
			}
		}
	}
}

declare module io {
	export module sentry {
		export module hints {
			export class ApplyScopeData {
				public static class: java.lang.Class<io.sentry.hints.ApplyScopeData>;
				/**
				 * Constructs a new instance of the io.sentry.hints.ApplyScopeData interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export module hints {
			export class Cached {
				public static class: java.lang.Class<io.sentry.hints.Cached>;
				/**
				 * Constructs a new instance of the io.sentry.hints.Cached interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export module hints {
			export class DiskFlushNotification {
				public static class: java.lang.Class<io.sentry.hints.DiskFlushNotification>;
				/**
				 * Constructs a new instance of the io.sentry.hints.DiskFlushNotification interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					markFlushed(): void;
				});
				public constructor();
				public markFlushed(): void;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module hints {
			export class Flushable {
				public static class: java.lang.Class<io.sentry.hints.Flushable>;
				/**
				 * Constructs a new instance of the io.sentry.hints.Flushable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					waitFlush(): boolean;
				});
				public constructor();
				public waitFlush(): boolean;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module hints {
			export class Resettable {
				public static class: java.lang.Class<io.sentry.hints.Resettable>;
				/**
				 * Constructs a new instance of the io.sentry.hints.Resettable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					reset(): void;
				});
				public constructor();
				public reset(): void;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module hints {
			export class Retryable {
				public static class: java.lang.Class<io.sentry.hints.Retryable>;
				/**
				 * Constructs a new instance of the io.sentry.hints.Retryable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					isRetry(): boolean;
					setRetry(param0: boolean): void;
				});
				public constructor();
				public isRetry(): boolean;
				public setRetry(param0: boolean): void;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module hints {
			export class SessionEnd {
				public static class: java.lang.Class<io.sentry.hints.SessionEnd>;
				/**
				 * Constructs a new instance of the io.sentry.hints.SessionEnd interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export module hints {
			export class SessionEndHint extends io.sentry.hints.SessionEnd {
				public static class: java.lang.Class<io.sentry.hints.SessionEndHint>;
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export module hints {
			export class SessionStart {
				public static class: java.lang.Class<io.sentry.hints.SessionStart>;
				/**
				 * Constructs a new instance of the io.sentry.hints.SessionStart interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export module hints {
			export class SessionStartHint extends io.sentry.hints.SessionStart {
				public static class: java.lang.Class<io.sentry.hints.SessionStartHint>;
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export module hints {
			export class SubmissionResult {
				public static class: java.lang.Class<io.sentry.hints.SubmissionResult>;
				/**
				 * Constructs a new instance of the io.sentry.hints.SubmissionResult interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setResult(param0: boolean): void;
					isSuccess(): boolean;
				});
				public constructor();
				public setResult(param0: boolean): void;
				public isSuccess(): boolean;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class App extends io.sentry.IUnknownPropertiesConsumer {
				public static class: java.lang.Class<io.sentry.protocol.App>;
				public static TYPE: string;
				public clone(): io.sentry.protocol.App;
				public setAppIdentifier(param0: string): void;
				public getAppIdentifier(): string;
				public setAppVersion(param0: string): void;
				public setAppBuild(param0: string): void;
				public getAppBuild(): string;
				public setAppName(param0: string): void;
				public getAppStartTime(): java.util.Date;
				public getDeviceAppHash(): string;
				public constructor();
				public getAppVersion(): string;
				public getBuildType(): string;
				public getAppName(): string;
				public setBuildType(param0: string): void;
				public setDeviceAppHash(param0: string): void;
				public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
				public setAppStartTime(param0: java.util.Date): void;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class Browser extends io.sentry.IUnknownPropertiesConsumer {
				public static class: java.lang.Class<io.sentry.protocol.Browser>;
				public static TYPE: string;
				public setName(param0: string): void;
				public getVersion(): string;
				public clone(): io.sentry.protocol.Browser;
				public getName(): string;
				public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
				public setVersion(param0: string): void;
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class Contexts extends java.util.concurrent.ConcurrentHashMap<string,any> implements java.lang.Cloneable  {
				public static class: java.lang.Class<io.sentry.protocol.Contexts>;
				public getOperatingSystem(): io.sentry.protocol.OperatingSystem;
				public getDevice(): io.sentry.protocol.Device;
				public setApp(param0: io.sentry.protocol.App): void;
				public constructor();
				public setDevice(param0: io.sentry.protocol.Device): void;
				public getRuntime(): io.sentry.protocol.SentryRuntime;
				public getGpu(): io.sentry.protocol.Gpu;
				public getTrace(): io.sentry.SpanContext;
				public clone(): io.sentry.protocol.Contexts;
				public setGpu(param0: io.sentry.protocol.Gpu): void;
				public getApp(): io.sentry.protocol.App;
				public setTrace(param0: io.sentry.SpanContext): void;
				public setBrowser(param0: io.sentry.protocol.Browser): void;
				public setRuntime(param0: io.sentry.protocol.SentryRuntime): void;
				public getBrowser(): io.sentry.protocol.Browser;
				public setOperatingSystem(param0: io.sentry.protocol.OperatingSystem): void;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class DebugImage extends io.sentry.IUnknownPropertiesConsumer {
				public static class: java.lang.Class<io.sentry.protocol.DebugImage>;
				public getUuid(): string;
				public setUuid(param0: string): void;
				public getType(): string;
				public setImageSize(param0: number): void;
				public setArch(param0: string): void;
				public getCodeId(): string;
				public getDebugFile(): string;
				public setCodeFile(param0: string): void;
				public getDebugId(): string;
				public getImageSize(): java.lang.Long;
				public setType(param0: string): void;
				public getArch(): string;
				public constructor();
				public setImageAddr(param0: string): void;
				public setImageSize(param0: java.lang.Long): void;
				public setDebugFile(param0: string): void;
				public setDebugId(param0: string): void;
				public getImageAddr(): string;
				public setCodeId(param0: string): void;
				public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
				public getCodeFile(): string;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class DebugMeta extends io.sentry.IUnknownPropertiesConsumer {
				public static class: java.lang.Class<io.sentry.protocol.DebugMeta>;
				public getImages(): java.util.List<io.sentry.protocol.DebugImage>;
				public setImages(param0: java.util.List<io.sentry.protocol.DebugImage>): void;
				public getSdkInfo(): io.sentry.protocol.SdkInfo;
				public setSdkInfo(param0: io.sentry.protocol.SdkInfo): void;
				public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class Device extends io.sentry.IUnknownPropertiesConsumer {
				public static class: java.lang.Class<io.sentry.protocol.Device>;
				public static TYPE: string;
				public setMemorySize(param0: java.lang.Long): void;
				public setFreeStorage(param0: java.lang.Long): void;
				public setScreenDpi(param0: java.lang.Integer): void;
				public getId(): string;
				public getFreeMemory(): java.lang.Long;
				public setCharging(param0: java.lang.Boolean): void;
				public setExternalStorageSize(param0: java.lang.Long): void;
				public setArchs(param0: androidNative.Array<string>): void;
				public getExternalStorageSize(): java.lang.Long;
				public getBrand(): string;
				public constructor();
				public setBatteryTemperature(param0: java.lang.Float): void;
				public isOnline(): java.lang.Boolean;
				public setBrand(param0: string): void;
				public getScreenWidthPixels(): java.lang.Integer;
				public getStorageSize(): java.lang.Long;
				public getTimezone(): java.util.TimeZone;
				public setScreenDensity(param0: java.lang.Float): void;
				public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
				public setName(param0: string): void;
				public setManufacturer(param0: string): void;
				public getMemorySize(): java.lang.Long;
				public setFamily(param0: string): void;
				public getName(): string;
				public setBatteryLevel(param0: java.lang.Float): void;
				public getArchs(): androidNative.Array<string>;
				public getBootTime(): java.util.Date;
				public clone(): io.sentry.protocol.Device;
				public setOnline(param0: java.lang.Boolean): void;
				public setStorageSize(param0: java.lang.Long): void;
				public isLowMemory(): java.lang.Boolean;
				public getLanguage(): string;
				public getScreenDpi(): java.lang.Integer;
				public setModelId(param0: string): void;
				public setConnectionType(param0: string): void;
				public setFreeMemory(param0: java.lang.Long): void;
				public getModelId(): string;
				public setLowMemory(param0: java.lang.Boolean): void;
				public getScreenDensity(): java.lang.Float;
				public setModel(param0: string): void;
				public setTimezone(param0: java.util.TimeZone): void;
				public getFamily(): string;
				public setScreenHeightPixels(param0: java.lang.Integer): void;
				public setUsableMemory(param0: java.lang.Long): void;
				public isCharging(): java.lang.Boolean;
				public setExternalFreeStorage(param0: java.lang.Long): void;
				public setId(param0: string): void;
				public getExternalFreeStorage(): java.lang.Long;
				public getFreeStorage(): java.lang.Long;
				public getScreenHeightPixels(): java.lang.Integer;
				public getOrientation(): io.sentry.protocol.Device.DeviceOrientation;
				public getBatteryLevel(): java.lang.Float;
				public getModel(): string;
				public getBatteryTemperature(): java.lang.Float;
				public setBootTime(param0: java.util.Date): void;
				public getConnectionType(): string;
				public setScreenWidthPixels(param0: java.lang.Integer): void;
				public setOrientation(param0: io.sentry.protocol.Device.DeviceOrientation): void;
				public getManufacturer(): string;
				public setSimulator(param0: java.lang.Boolean): void;
				public setLanguage(param0: string): void;
				public isSimulator(): java.lang.Boolean;
				public getUsableMemory(): java.lang.Long;
			}
			export module Device {
				export class DeviceOrientation {
					public static class: java.lang.Class<io.sentry.protocol.Device.DeviceOrientation>;
					public static PORTRAIT: io.sentry.protocol.Device.DeviceOrientation;
					public static LANDSCAPE: io.sentry.protocol.Device.DeviceOrientation;
					public static valueOf(param0: string): io.sentry.protocol.Device.DeviceOrientation;
					public static values(): androidNative.Array<io.sentry.protocol.Device.DeviceOrientation>;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class Gpu extends io.sentry.IUnknownPropertiesConsumer {
				public static class: java.lang.Class<io.sentry.protocol.Gpu>;
				public static TYPE: string;
				public setName(param0: string): void;
				public setApiType(param0: string): void;
				public getVendorName(): string;
				public setMemorySize(param0: java.lang.Integer): void;
				public setNpotSupport(param0: string): void;
				public getName(): string;
				public isMultiThreadedRendering(): java.lang.Boolean;
				public setVersion(param0: string): void;
				public getId(): java.lang.Integer;
				public constructor();
				public setVendorId(param0: java.lang.Integer): void;
				public clone(): io.sentry.protocol.Gpu;
				public getApiType(): string;
				public getVersion(): string;
				public setId(param0: java.lang.Integer): void;
				public setMultiThreadedRendering(param0: java.lang.Boolean): void;
				public setVendorName(param0: string): void;
				public getMemorySize(): java.lang.Integer;
				public getVendorId(): java.lang.Integer;
				public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
				public getNpotSupport(): string;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class Mechanism extends io.sentry.IUnknownPropertiesConsumer {
				public static class: java.lang.Class<io.sentry.protocol.Mechanism>;
				public setData(param0: java.util.Map<string,any>): void;
				public setSynthetic(param0: java.lang.Boolean): void;
				public getType(): string;
				public isHandled(): java.lang.Boolean;
				public constructor(param0: java.lang.Thread);
				public setMeta(param0: java.util.Map<string,any>): void;
				public getHelpLink(): string;
				public setType(param0: string): void;
				public getDescription(): string;
				public getMeta(): java.util.Map<string,any>;
				public getData(): java.util.Map<string,any>;
				public setHelpLink(param0: string): void;
				public constructor();
				public setDescription(param0: string): void;
				public setHandled(param0: java.lang.Boolean): void;
				public getSynthetic(): java.lang.Boolean;
				public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class Message extends io.sentry.IUnknownPropertiesConsumer {
				public static class: java.lang.Class<io.sentry.protocol.Message>;
				public getFormatted(): string;
				public setParams(param0: java.util.List<string>): void;
				public setMessage(param0: string): void;
				public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
				public getMessage(): string;
				public getParams(): java.util.List<string>;
				public setFormatted(param0: string): void;
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class OperatingSystem extends io.sentry.IUnknownPropertiesConsumer {
				public static class: java.lang.Class<io.sentry.protocol.OperatingSystem>;
				public static TYPE: string;
				public setName(param0: string): void;
				public getRawDescription(): string;
				public isRooted(): java.lang.Boolean;
				public getBuild(): string;
				public setRooted(param0: java.lang.Boolean): void;
				public getName(): string;
				public setVersion(param0: string): void;
				public constructor();
				public getVersion(): string;
				public setBuild(param0: string): void;
				public getKernelVersion(): string;
				public clone(): io.sentry.protocol.OperatingSystem;
				public setRawDescription(param0: string): void;
				public setKernelVersion(param0: string): void;
				public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class Request extends io.sentry.IUnknownPropertiesConsumer {
				public static class: java.lang.Class<io.sentry.protocol.Request>;
				public getCookies(): string;
				public clone(): io.sentry.protocol.Request;
				public setMethod(param0: string): void;
				public getOthers(): java.util.Map<string,string>;
				public setHeaders(param0: java.util.Map<string,string>): void;
				public getUrl(): string;
				public getData(): any;
				public setCookies(param0: string): void;
				public constructor();
				public getMethod(): string;
				public setData(param0: any): void;
				public getEnvs(): java.util.Map<string,string>;
				public getHeaders(): java.util.Map<string,string>;
				public getQueryString(): string;
				public setEnvs(param0: java.util.Map<string,string>): void;
				public setQueryString(param0: string): void;
				public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
				public setUrl(param0: string): void;
				public setOthers(param0: java.util.Map<string,string>): void;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class SdkInfo extends io.sentry.IUnknownPropertiesConsumer {
				public static class: java.lang.Class<io.sentry.protocol.SdkInfo>;
				public setSdkName(param0: string): void;
				public getVersionMinor(): java.lang.Integer;
				public setVersionPatchlevel(param0: java.lang.Integer): void;
				public setVersionMajor(param0: java.lang.Integer): void;
				public setVersionMinor(param0: java.lang.Integer): void;
				public getSdkName(): string;
				public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
				public getVersionMajor(): java.lang.Integer;
				public constructor();
				public getVersionPatchlevel(): java.lang.Integer;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class SdkVersion extends io.sentry.IUnknownPropertiesConsumer {
				public static class: java.lang.Class<io.sentry.protocol.SdkVersion>;
				public getVersion(): string;
				public setName(param0: string): void;
				public static updateSdkVersion(param0: io.sentry.protocol.SdkVersion, param1: string, param2: string): io.sentry.protocol.SdkVersion;
				/** @deprecated */
				public constructor();
				public getIntegrations(): java.util.List<string>;
				public getName(): string;
				public getPackages(): java.util.List<io.sentry.protocol.SentryPackage>;
				public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
				public setVersion(param0: string): void;
				public addIntegration(param0: string): void;
				public addPackage(param0: string, param1: string): void;
				public constructor(param0: string, param1: string);
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class SentryException extends io.sentry.IUnknownPropertiesConsumer {
				public static class: java.lang.Class<io.sentry.protocol.SentryException>;
				public getType(): string;
				public getModule(): string;
				public getMechanism(): io.sentry.protocol.Mechanism;
				public setModule(param0: string): void;
				public getValue(): string;
				public setType(param0: string): void;
				public constructor();
				public setValue(param0: string): void;
				public setThreadId(param0: java.lang.Long): void;
				public getStacktrace(): io.sentry.protocol.SentryStackTrace;
				public setMechanism(param0: io.sentry.protocol.Mechanism): void;
				public getThreadId(): java.lang.Long;
				public setStacktrace(param0: io.sentry.protocol.SentryStackTrace): void;
				public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class SentryId {
				public static class: java.lang.Class<io.sentry.protocol.SentryId>;
				public static EMPTY_ID: io.sentry.protocol.SentryId;
				public hashCode(): number;
				public constructor(param0: java.util.UUID);
				public equals(param0: any): boolean;
				public toString(): string;
				public constructor(param0: string);
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class SentryPackage extends io.sentry.IUnknownPropertiesConsumer {
				public static class: java.lang.Class<io.sentry.protocol.SentryPackage>;
				public setName(param0: string): void;
				public getVersion(): string;
				/** @deprecated */
				public constructor();
				public getName(): string;
				public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
				public setVersion(param0: string): void;
				public constructor(param0: string, param1: string);
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class SentryRuntime extends io.sentry.IUnknownPropertiesConsumer {
				public static class: java.lang.Class<io.sentry.protocol.SentryRuntime>;
				public static TYPE: string;
				public setName(param0: string): void;
				public getVersion(): string;
				public getRawDescription(): string;
				public clone(): io.sentry.protocol.SentryRuntime;
				public setRawDescription(param0: string): void;
				public getName(): string;
				public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
				public setVersion(param0: string): void;
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class SentryStackFrame extends io.sentry.IUnknownPropertiesConsumer {
				public static class: java.lang.Class<io.sentry.protocol.SentryStackFrame>;
				public setFramesOmitted(param0: java.util.List<java.lang.Integer>): void;
				public getModule(): string;
				public setModule(param0: string): void;
				public setPostContext(param0: java.util.List<string>): void;
				public getAbsPath(): string;
				public getFunction(): string;
				public setVars(param0: java.util.Map<string,string>): void;
				public getVars(): java.util.Map<string,string>;
				public setPackage(param0: string): void;
				public getPreContext(): java.util.List<string>;
				public setAbsPath(param0: string): void;
				public constructor();
				public setColno(param0: java.lang.Integer): void;
				public setImageAddr(param0: string): void;
				public setNative(param0: java.lang.Boolean): void;
				public setRawFunction(param0: string): void;
				public getFilename(): string;
				public setPlatform(param0: string): void;
				public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
				public getPackage(): string;
				public setFunction(param0: string): void;
				public getLineno(): java.lang.Integer;
				public setInApp(param0: java.lang.Boolean): void;
				public getFramesOmitted(): java.util.List<java.lang.Integer>;
				public setSymbolAddr(param0: string): void;
				public getPostContext(): java.util.List<string>;
				public getContextLine(): string;
				public getSymbolAddr(): string;
				public setInstructionAddr(param0: string): void;
				public getRawFunction(): string;
				public setLineno(param0: java.lang.Integer): void;
				public setContextLine(param0: string): void;
				public setFilename(param0: string): void;
				public getPlatform(): string;
				public getInstructionAddr(): string;
				public getImageAddr(): string;
				public setPreContext(param0: java.util.List<string>): void;
				public getColno(): java.lang.Integer;
				public isInApp(): java.lang.Boolean;
				public isNative(): java.lang.Boolean;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class SentryStackTrace extends io.sentry.IUnknownPropertiesConsumer {
				public static class: java.lang.Class<io.sentry.protocol.SentryStackTrace>;
				public setRegisters(param0: java.util.Map<string,string>): void;
				public constructor(param0: java.util.List<io.sentry.protocol.SentryStackFrame>);
				public getRegisters(): java.util.Map<string,string>;
				public setSnapshot(param0: java.lang.Boolean): void;
				public setFrames(param0: java.util.List<io.sentry.protocol.SentryStackFrame>): void;
				public getSnapshot(): java.lang.Boolean;
				public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
				public constructor();
				public getFrames(): java.util.List<io.sentry.protocol.SentryStackFrame>;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class SentryThread extends io.sentry.IUnknownPropertiesConsumer {
				public static class: java.lang.Class<io.sentry.protocol.SentryThread>;
				public setName(param0: string): void;
				public getPriority(): java.lang.Integer;
				public isCrashed(): java.lang.Boolean;
				public setDaemon(param0: java.lang.Boolean): void;
				public setCurrent(param0: java.lang.Boolean): void;
				public getName(): string;
				public setCrashed(param0: java.lang.Boolean): void;
				public setId(param0: java.lang.Long): void;
				public isCurrent(): java.lang.Boolean;
				public constructor();
				public getStacktrace(): io.sentry.protocol.SentryStackTrace;
				public getState(): string;
				public isDaemon(): java.lang.Boolean;
				public getId(): java.lang.Long;
				public setStacktrace(param0: io.sentry.protocol.SentryStackTrace): void;
				public setState(param0: string): void;
				public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
				public setPriority(param0: java.lang.Integer): void;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class User extends io.sentry.IUnknownPropertiesConsumer {
				public static class: java.lang.Class<io.sentry.protocol.User>;
				public getId(): string;
				public getEmail(): string;
				public getIpAddress(): string;
				public getOthers(): java.util.Map<string,string>;
				public setEmail(param0: string): void;
				public clone(): io.sentry.protocol.User;
				public constructor();
				public setId(param0: string): void;
				public setUsername(param0: string): void;
				public getUsername(): string;
				public setIpAddress(param0: string): void;
				public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
				public setOthers(param0: java.util.Map<string,string>): void;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module transport {
			export class AsyncHttpTransport extends io.sentry.transport.ITransport {
				public static class: java.lang.Class<io.sentry.transport.AsyncHttpTransport>;
				public constructor(param0: io.sentry.transport.QueuedThreadPoolExecutor, param1: io.sentry.SentryOptions, param2: io.sentry.transport.RateLimiter, param3: io.sentry.transport.ITransportGate, param4: io.sentry.transport.HttpConnection);
				public constructor(param0: io.sentry.SentryOptions, param1: io.sentry.transport.RateLimiter, param2: io.sentry.transport.ITransportGate, param3: io.sentry.RequestDetails);
				public close(): void;
				public send(param0: io.sentry.SentryEnvelope, param1: any): void;
				public send(param0: io.sentry.SentryEnvelope): void;
				public flush(param0: number): void;
			}
			export module AsyncHttpTransport {
				export class AsyncConnectionThreadFactory {
					public static class: java.lang.Class<io.sentry.transport.AsyncHttpTransport.AsyncConnectionThreadFactory>;
					public newThread(param0: java.lang.Runnable): java.lang.Thread;
				}
				export class EnvelopeSender {
					public static class: java.lang.Class<io.sentry.transport.AsyncHttpTransport.EnvelopeSender>;
					public run(): void;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module transport {
			export class AuthenticatorWrapper {
				public static class: java.lang.Class<io.sentry.transport.AuthenticatorWrapper>;
				public setDefault(param0: java.net.Authenticator): void;
				public static getInstance(): io.sentry.transport.AuthenticatorWrapper;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module transport {
			export class CurrentDateProvider extends io.sentry.transport.ICurrentDateProvider {
				public static class: java.lang.Class<io.sentry.transport.CurrentDateProvider>;
				public getCurrentTimeMillis(): number;
				public static getInstance(): io.sentry.transport.ICurrentDateProvider;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module transport {
			export class HttpConnection {
				public static class: java.lang.Class<io.sentry.transport.HttpConnection>;
				public send(param0: io.sentry.SentryEnvelope): io.sentry.transport.TransportResult;
				public updateRetryAfterLimits(param0: java.net.HttpURLConnection, param1: number): void;
				public constructor(param0: io.sentry.SentryOptions, param1: io.sentry.RequestDetails, param2: io.sentry.transport.RateLimiter);
			}
		}
	}
}

declare module io {
	export module sentry {
		export module transport {
			export class ICurrentDateProvider {
				public static class: java.lang.Class<io.sentry.transport.ICurrentDateProvider>;
				/**
				 * Constructs a new instance of the io.sentry.transport.ICurrentDateProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getCurrentTimeMillis(): number;
				});
				public constructor();
				public getCurrentTimeMillis(): number;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module transport {
			export class ITransport {
				public static class: java.lang.Class<io.sentry.transport.ITransport>;
				/**
				 * Constructs a new instance of the io.sentry.transport.ITransport interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					send(param0: io.sentry.SentryEnvelope, param1: any): void;
					send(param0: io.sentry.SentryEnvelope): void;
					flush(param0: number): void;
				});
				public constructor();
				public send(param0: io.sentry.SentryEnvelope, param1: any): void;
				public send(param0: io.sentry.SentryEnvelope): void;
				public flush(param0: number): void;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module transport {
			export class ITransportGate {
				public static class: java.lang.Class<io.sentry.transport.ITransportGate>;
				/**
				 * Constructs a new instance of the io.sentry.transport.ITransportGate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					isConnected(): boolean;
				});
				public constructor();
				public isConnected(): boolean;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module transport {
			export class NoOpEnvelopeCache extends io.sentry.cache.IEnvelopeCache {
				public static class: java.lang.Class<io.sentry.transport.NoOpEnvelopeCache>;
				public discard(param0: io.sentry.SentryEnvelope): void;
				public store(param0: io.sentry.SentryEnvelope, param1: any): void;
				public store(param0: io.sentry.SentryEnvelope): void;
				public static getInstance(): io.sentry.transport.NoOpEnvelopeCache;
				public iterator(): java.util.Iterator<io.sentry.SentryEnvelope>;
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export module transport {
			export class NoOpTransport extends io.sentry.transport.ITransport {
				public static class: java.lang.Class<io.sentry.transport.NoOpTransport>;
				public close(): void;
				public static getInstance(): io.sentry.transport.NoOpTransport;
				public send(param0: io.sentry.SentryEnvelope, param1: any): void;
				public send(param0: io.sentry.SentryEnvelope): void;
				public flush(param0: number): void;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module transport {
			export class NoOpTransportGate extends io.sentry.transport.ITransportGate {
				public static class: java.lang.Class<io.sentry.transport.NoOpTransportGate>;
				public isConnected(): boolean;
				public static getInstance(): io.sentry.transport.NoOpTransportGate;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module transport {
			export class ProxyAuthenticator {
				public static class: java.lang.Class<io.sentry.transport.ProxyAuthenticator>;
				public getPasswordAuthentication(): java.net.PasswordAuthentication;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module transport {
			export class QueuedThreadPoolExecutor {
				public static class: java.lang.Class<io.sentry.transport.QueuedThreadPoolExecutor>;
				public afterExecute(param0: java.lang.Runnable, param1: java.lang.Throwable): void;
				public submit(param0: java.lang.Runnable): java.util.concurrent.Future<any>;
				public constructor(param0: number, param1: number, param2: java.util.concurrent.ThreadFactory, param3: java.util.concurrent.RejectedExecutionHandler, param4: io.sentry.ILogger);
			}
			export module QueuedThreadPoolExecutor {
				export class CancelledFuture<T>  extends java.util.concurrent.Future<any> {
					public static class: java.lang.Class<io.sentry.transport.QueuedThreadPoolExecutor.CancelledFuture<any>>;
					public get(): any;
					public isDone(): boolean;
					public isCancelled(): boolean;
					public get(param0: number, param1: java.util.concurrent.TimeUnit): any;
					public cancel(param0: boolean): boolean;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module transport {
			export class RateLimiter {
				public static class: java.lang.Class<io.sentry.transport.RateLimiter>;
				public constructor(param0: io.sentry.ILogger);
				public filter(param0: io.sentry.SentryEnvelope, param1: any): io.sentry.SentryEnvelope;
				public constructor(param0: io.sentry.transport.ICurrentDateProvider, param1: io.sentry.ILogger);
				public updateRetryAfterLimits(param0: string, param1: string, param2: number): void;
			}
			export module RateLimiter {
				export class DataCategory {
					public static class: java.lang.Class<io.sentry.transport.RateLimiter.DataCategory>;
					public static All: io.sentry.transport.RateLimiter.DataCategory;
					public static Default: io.sentry.transport.RateLimiter.DataCategory;
					public static Error: io.sentry.transport.RateLimiter.DataCategory;
					public static Session: io.sentry.transport.RateLimiter.DataCategory;
					public static Attachment: io.sentry.transport.RateLimiter.DataCategory;
					public static Transaction: io.sentry.transport.RateLimiter.DataCategory;
					public static Security: io.sentry.transport.RateLimiter.DataCategory;
					public static Unknown: io.sentry.transport.RateLimiter.DataCategory;
					public getCategory(): string;
					public static values(): androidNative.Array<io.sentry.transport.RateLimiter.DataCategory>;
					public static valueOf(param0: string): io.sentry.transport.RateLimiter.DataCategory;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module transport {
			export class ReusableCountLatch {
				public static class: java.lang.Class<io.sentry.transport.ReusableCountLatch>;
				public waitTillZero(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
				public increment(): void;
				public constructor(param0: number);
				public getCount(): number;
				public decrement(): void;
				public constructor();
				public waitTillZero(): void;
			}
			export module ReusableCountLatch {
				export class Sync {
					public static class: java.lang.Class<io.sentry.transport.ReusableCountLatch.Sync>;
					public tryAcquireShared(param0: number): number;
					public tryReleaseShared(param0: number): boolean;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module transport {
			export class StdoutTransport extends io.sentry.transport.ITransport {
				public static class: java.lang.Class<io.sentry.transport.StdoutTransport>;
				public close(): void;
				public send(param0: io.sentry.SentryEnvelope, param1: any): void;
				public send(param0: io.sentry.SentryEnvelope): void;
				public constructor(param0: io.sentry.ISerializer);
				public flush(param0: number): void;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module transport {
			export abstract class TransportResult {
				public static class: java.lang.Class<io.sentry.transport.TransportResult>;
				public static success(): io.sentry.transport.TransportResult;
				public getResponseCode(): number;
				public isSuccess(): boolean;
				public static error(): io.sentry.transport.TransportResult;
				public static error(param0: number): io.sentry.transport.TransportResult;
			}
			export module TransportResult {
				export class ErrorTransportResult extends io.sentry.transport.TransportResult {
					public static class: java.lang.Class<io.sentry.transport.TransportResult.ErrorTransportResult>;
					public getResponseCode(): number;
					public isSuccess(): boolean;
				}
				export class SuccessTransportResult extends io.sentry.transport.TransportResult {
					public static class: java.lang.Class<io.sentry.transport.TransportResult.SuccessTransportResult>;
					public getResponseCode(): number;
					public isSuccess(): boolean;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module util {
			export class ApplyScopeUtils {
				public static class: java.lang.Class<io.sentry.util.ApplyScopeUtils>;
				public static shouldApplyScopeData(param0: any): boolean;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module util {
			export class CollectionUtils {
				public static class: java.lang.Class<io.sentry.util.CollectionUtils>;
				public static size(param0: java.lang.Iterable<any>): number;
				public static shallowCopy(param0: java.util.Map): java.util.Map;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module util {
			export class LogUtils {
				public static class: java.lang.Class<io.sentry.util.LogUtils>;
				public static logIfNotRetryable(param0: io.sentry.ILogger, param1: any): void;
				public static logIfNotFlushable(param0: io.sentry.ILogger, param1: any): void;
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export module util {
			export class Objects {
				public static class: java.lang.Class<io.sentry.util.Objects>;
				public static requireNonNull(param0: any, param1: string): any;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module util {
			export class StringUtils {
				public static class: java.lang.Class<io.sentry.util.StringUtils>;
				public static capitalize(param0: string): string;
				public static getStringAfterDot(param0: string): string;
				public static removeSurrounding(param0: string, param1: string): string;
			}
		}
	}
}

//Generics information:
//io.sentry.CircularFifoQueue:1
//io.sentry.OptionsContainer:1
//io.sentry.Sentry.OptionsConfiguration:1
//io.sentry.SentryValues:1
//io.sentry.SynchronizedCollection:1
//io.sentry.SynchronizedQueue:1
//io.sentry.UnknownPropertiesTypeAdapterFactory.UnknownPropertiesTypeAdapter:1
//io.sentry.transport.QueuedThreadPoolExecutor.CancelledFuture:1


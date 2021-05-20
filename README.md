# Sentry.io for NativeScript

[![npm](https://img.shields.io/npm/v/nativescript-sentry.svg)](https://www.npmjs.com/package/nativescript-sentry)
[![npm](https://img.shields.io/npm/dt/nativescript-sentry.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-sentry)

> NativeScript plugin that uses [sentry-android](https://github.com/getsentry/sentry-android) and [sentry-cocoa](https://github.com/getsentry/sentry-cocoa) to catch native errors/stack traces and send them to a sentry server.

---

:seven: – **This is the documentation of v2 which is compatible with NativeScript 7**<br>
:construction: – **Currently in alpha state, use with caution!**<br>
:six: – **If you are using NativeScript 6, use a [v1 release](https://github.com/FinanzRitter/nativescript-sentry/tree/next).**

---

## Installation

```sh
ns plugin add nativescript-sentry
```

## Configuration

### Android

Add the following line to your `AndroidManifest.xml` within the `<application>-tag`:

```xml
<meta-data android:name="io.sentry.auto-init" android:value="false" />
```

### Without Angular

```typescript
import { Sentry } from 'nativescript-sentry';
const dsn = 'https://<key>:<secret>@host/<project>';
Sentry.init(dsn);
```

### With Angular

```typescript
import { SentryModule } from 'nativescript-sentry/angular';

NgModule({
  // ...
  imports: [
    SentryModule.forRoot({
      dsn: 'https://<key>:<secret>@host/<project>',
      discardUncaughtJsExceptions: true
    })
  ]
  // ...
});
```

**Note:** this plugin adds a custom ErrorHandler to your angular app

## Usage

### Capture an exception

```typescript
Sentry.captureException(exeption: Error, options?: ExceptionOptions);
```

```typescript
export interface ExceptionOptions {
  // Object of additional Key/value pairs which generate breakdowns charts and search filters in Sentry.
  tags?: object;

  // Object of unstructured data which is stored with events.
  extra?: object;
}
```

Example:

```typescript
try {
  throw new Error('Whoops!');
} catch (error) {
  Sentry.captureException(error, {});
}
```

### Capture a message

```typescript
Sentry.captureMessage(message: string, options?: MessageOptions)
```

```typescript
export interface MessageOptions {
  level?: Level;

  // Object of additional Key/value pairs which generate breakdowns charts and search filters.
  tags?: object;

  // Object of unstructured data which is stored with events.
  extra?: object;
}

export enum Level {
  Fatal = 'fatal',
  Error = 'error',
  Warning = 'warning',
  Info = 'info',
  Debug = 'debug'
}
```

### Capture navigation breadcrumb

```typescript
Sentry.captureBreadcrumb(breadcrumb: BreadCrumb)
```

```typescript
export interface BreadCrumb {
  message: string;
  category: string;
  level: Level;
}
```

### Set user

```typescript
Sentry.setUser(user: SentryUser)
```

```typescript
export interface SentryUser {
  id: string;
  email?: string;
  username?: string;
}
```

### Set tags

```typescript
Sentry.setTags(tags: object)
```

### Set extra information

```typescript
Sentry.setExtras(extra: object)
```

### Clear context (user, tags, extra information)

```typescript
Sentry.clearContext();
```

## Troubleshooting and important remarks

### Native Exceptions / Crashes

If you have a **native exception** and the app exits, the plugin will save the log and send it in the **next app startup**, this is how the native plugins are implemented and it is expected behavior.

### Android SLF4J Log Error

Sentry has an optional dependency on SLF4J on Android, which when not present will log an error about it not being in the application.

```
System.err: SLF4J: Failed to load class "org.slf4j.impl.StaticLoggerBinder".
System.err: SLF4J: Defaulting to no-operation (NOP) logger implementation
System.err: SLF4J: See http://www.slf4j.org/codes.html#StaticLoggerBinder for further details.
```

To get rid of this log warning you can add a dependency to your app's app.gradle file located in `App_Resources/Android/app.gradle` to include:

```
compile 'org.slf4j:slf4j-nop:1.7.25'
```

in the dependencies. See the [demo app](/demo/app/App_Resources/Android/app.gradle).

## Demo Apps

To run and test the demo apps you need to replace the placeholder `__YOUR_DSN_HERE__` by your own DSN in the following files:

- demo/App_Resources/Android/src/main/AndroidManifest.xml
- demo/app/app.ts
- demo-ng/App_Resources/Android/src/main/AndroidManifest.xml
- demo-ng/src/app.module.ts

## Changelog

### 2.1.0 - (20.05.2020)

- vendor: update to sentry 4.3.0 (Android)
- vendor: update to sentry 6.2.1 (iOS)

Thanks to [Logikgate](https://github.com/Logikgate).

### 2.0.1 - (25.03.2021)

- fix issues with Angular
- fix issues with user data on android

Thanks to [@jeremypele](https://github.com/jeremypele) and [@jerbob92](https://github.com/jerbob92)!

### 2.0.0-alpha.1 – (10.09.2020)

- update Android SDK
- update for NativeScript 7
- add workflows for demo apps

Thanks to [@bradmartin](https://github.com/bradmartin)!

### 1.10.3 – (10.09.2020)

- Release new version under original name on npmjs.org

### 1.10.2 – (17.04.2020)

- Fix GitHub Workflow to use existing publishing scripts

### 1.10.1 – (17.04.2020)

- Set up GitHub Workflow for npm publising

### 1.10.0 – (15.04.2020)

- Bumps to latest native SDK releases
- Stringifies data before writing it to Extras (Android)

---

Package was forked from the unmaintained package
[danielgek/nativescript-sentry](https://github.com/danielgek/nativescript-sentry). Access to original npm package has been transfered. Many thanks to [@danielgek](https://github.com/danielgek) for his original work on this plugin!

---

### 1.8.0 – (02.02.2019)

- bumps to latest native SDK releases
- implements improved data converter(#22)
- adds data to SentryUser

Thanks to **@bradmartin** and **@jerbob92**!

### 1.6.1 – (28.11.2018)

- back to native approach thanks to **@bradmartin**
- update dependencies
- update test app
- working native breadcrums for ios
- fix dsn init thanks to **@kvnvelasco**

### 1.5.0 – (11.12.2017)

**BREAKING CHANGES**

- `capture()` method was deprecated in favor of `captureMessage`/`captureException`

**Features**

- Moving to an hybrid approach with both clients (web/native)
- breadcrumbs
- tags
- user info
- set tags and extra for each event

### 1.3.0 – (28.08.2017)

- fix Aot compilation for angular apps
- fix typos thanks to @muratcorlu

### 1.2.0 – (02.08.2017)

- update demos dependencies
- update ios and android native dependencies
- fix ios event capture

### 1.1.0 – (24.07.2017)

- fix stringify
- fix angular error handler

## Credits

- **@danielgek**: for being the original author of this plugin **[danielgek/nativescript-sentry](https://github.com/danielgek/nativescript-sentry)**
- **@hypery2k**: for his **nativescript-fabric** (helped the original author a lot!)

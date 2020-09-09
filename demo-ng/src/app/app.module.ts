import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptModule } from '@nativescript/angular';
import { SentryModule } from 'nativescript-sentry/angular';
import { AppComponent } from './app.component';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    NativeScriptCommonModule,
    SentryModule.forRoot({
      dsn: 'https://10b5f0389dfe422cb6127e67c4af05e9@sentry.io/1320301'
    })
  ],
  declarations: [AppComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}

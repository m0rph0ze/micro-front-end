import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './login.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    LoginService
  ],
  // bootstrap: [AppComponent],
  entryComponents: [
    LoginComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) {
    const myElement = createCustomElement(LoginComponent, { injector });
    customElements.define('login-element', myElement);
  }
  ngDoBootstrap() {}
 }

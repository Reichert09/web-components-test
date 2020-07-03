import { BrowserModule } from '@angular/platform-browser';
import { NgModule, DoBootstrap, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { FirstComponentComponent } from './first-component/first-component.component';

@NgModule({
  declarations: [
    FirstComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [FirstComponentComponent]
})
export class AppModule implements DoBootstrap {

  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(FirstComponentComponent, { injector: this.injector });
    customElements.define('first-component', el);
  }

 }

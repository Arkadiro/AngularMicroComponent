import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { ButtonSuccessComponent } from './button-success/button-success.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ButtonSuccessComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

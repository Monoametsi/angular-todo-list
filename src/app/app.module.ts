import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddButtonComponent } from './add-button/add-button.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddButtonComponent,
    InputFieldComponent,
    BodyComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
	FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

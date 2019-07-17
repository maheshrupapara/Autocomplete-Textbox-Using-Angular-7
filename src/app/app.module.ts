import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';

import { AutoCompleteModule } from '@syncfusion/ej2-angular-dropdowns';

import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AutoCompleteModule, CheckBoxModule, DropDownListModule, FormsModule, ReactiveFormsModule,],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

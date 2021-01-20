import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {APP_BASE_HREF, Location} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { InvoiceexitComponent } from './invoiceexit/invoiceexit.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    InvoicesComponent,
    EmployeeDetailComponent,
    MessagesComponent,
    InvoiceexitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
  { provide: APP_BASE_HREF, useValue: window['_app_base'] || '/' },
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

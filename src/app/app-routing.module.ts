import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceexitComponent } from './invoiceexit/invoiceexit.component';
import { EmployeesComponent } from './employees/employees.component';
import { InvoicesComponent } from './invoices/invoices.component';

const routes: Routes = [
{ path: 'invoice-exit', component: InvoiceexitComponent },
{ path: 'employees', component: EmployeesComponent },
{ path: 'invoices', component: InvoicesComponent },
{ path: '/invoices',   redirectTo: '/invoice-exit', pathMatch: 'full' },
{ path: '**', component: InvoiceexitComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceexitComponent } from './invoiceexit/invoiceexit.component';
import { EmployeesComponent } from './employees/employees.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { WebComponent } from './web/web.component';

const routes: Routes = [
{ path: 'invoice-exit', component: InvoiceexitComponent },
{ path: 'employees', component: EmployeesComponent },
{ path: 'invoices', component: InvoicesComponent },
{ path: 'web', component: WebComponent },
{ path: '**',   redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }

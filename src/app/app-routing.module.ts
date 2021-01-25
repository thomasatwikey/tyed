import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceexitComponent } from './invoiceexit/invoiceexit.component';
import { EmployeesComponent } from './employees/employees.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { WebComponent } from './web/web.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
{ path: 'invoice-exit', component: InvoiceexitComponent },
{ path: 'employees', component: EmployeesComponent },
{ path: 'invoices', component: InvoicesComponent },
{ path: 'web', component: WebComponent },
{ path: 'home', component: HomeComponent },
{ path: '**',   redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }

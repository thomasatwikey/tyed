import { Component, OnInit } from '@angular/core';
import { Invoice } from '../invoice';
import { INVOICES } from '../mock-invoices';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {

invoices = INVOICES;
selectedInvoice: Invoice;

  constructor() { }

  ngOnInit(): void {
  }

    onSelect(invoice: Invoice): void {
      this.selectedInvoice = invoice;
    }

}

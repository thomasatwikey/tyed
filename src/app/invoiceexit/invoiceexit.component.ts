import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-invoiceexit',
  templateUrl: './invoiceexit.component.html',
  styleUrls: ['./invoiceexit.component.css']
})
export class InvoiceexitComponent implements OnInit {

constructor(
    private route: ActivatedRoute,
  ) {}

  id: string ="";

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
    });
  }
}

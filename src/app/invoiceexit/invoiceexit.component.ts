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
  state: string = "";

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'],
      this.state= params['state'];
      console.log(this.id);
      console.log(this.state);
    });
  }
}

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
  title: string ="";
  locale: string = "";

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'],
      this.state = params['state'],
      this.title = params['title'],
      this.locale = params['locale'];
      console.log("id: " + this.id);
      console.log("state: " + this.state);
      console.log("title: " + this.title);
      console.log("locale: " + this.locale);
    });
  }
}

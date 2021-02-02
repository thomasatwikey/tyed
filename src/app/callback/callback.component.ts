import { Component, OnInit } from '@angular/core';
import { AjaxService } from '../ajax.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

  constructor(
  private ajaxservice: AjaxService
  ) { }

  ngOnInit(): void {
  }

  reloadCurrentRoute() {
  this.ajaxservice.getCallback();
          console.log('function called..');
  }

}

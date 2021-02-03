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

/*   login() {
  this.ajaxservice.login();
          console.log('function called..');
  } */

}

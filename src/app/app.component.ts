import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, NavigationEnd, } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AdminMaster 3000';
  constructor(
    private route: ActivatedRoute, private router: Router
  ) {}

  ngOnInit() {
  this.router.events.subscribe((evt) => {
              if (!(evt instanceof NavigationEnd)) {
                  return;
              }
              window.scrollTo(0, 0)
          });
              this.router.events.forEach((event) => {
            console.log(event);
          });
  }

}

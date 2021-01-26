import { Component, OnInit } from '@angular/core';
import { Collection } from './collections';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {

 collectionItem: Collection[] = [
 {
     title: "Cat over bamboo",
     filename: "cat over bamboo.jpg",
     category: "drawing",
     creator: "Thomas",
     createDate: "25/01/2021"
},
 {
     title: "Dark Van Ranst: Love Edition",
     filename: "dvr love edition.jpg",
     category: "drawing",
     creator: "Thomas & Sanne",
     createDate: "25/01/2021"
},
 {
     title: "Reserved",
     filename: "placeholder.jpg",
     category: "comic",
     creator: "Unknown",
     createDate: "dd/mm/yyyy"
},
 {
     title: "Reserved",
     filename: "placeholder.jpg",
     category: "comic",
     creator: "Unknown",
     createDate: "dd/mm/yyyy"
},
]

//   { id: 1000127, name: 'Marc', age: 46, department: 'HR', gender: 'male', alt: 'placeholder' },
//     { id: 1000128, name: 'Kevin', age: 33, department: 'HR', gender: 'male', alt: 'check' }

constructor(
    private route: Router,
  ) {}

 //url: Observable<UrlSegment[]> = this.route.url.replace('/','').toString();
 url: String = this.route.url.replace('/','').toString();

  ngOnInit(): void {
    console.log('active route: '  + this.route.url);
  }

}

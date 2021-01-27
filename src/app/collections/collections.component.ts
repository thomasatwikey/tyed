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

// Example different fields:
     // {
     //    title: "Reserved",
     //     filename: "placeholder.jpg",
     //     category: "drawings", -> comics, drawings
     //     creator: "Unknown",
     //     createDate: "dd/mm/yyyy",
     //               form: "undefined", -> animal, person, object, ..
     //               type: "undefined", -> portrait, landscape, other, ..
     //               subForm: "undefined" -> cat, dog, men, women, baby, chair, ..
     // }
// End

 collectionItem: Collection[] = [
 {
     title: "Cat over bamboo",
     filename: "cat over bamboo.jpg",
     category: "drawings",
     creator: "Thomas",
     createDate: "25/01/2021",
     form: "animal",
     type: "portrait",
     subForm: "cat"
},
 {
     title: "Dark Van Ranst: Love Edition",
     filename: "dvr love edition.jpg",
     category: "drawings",
     creator: "Thomas & Sanne",
     createDate: "25/01/2021",
          form: "person",
          type: "portrait",
          subForm: "men"
},
 {
     title: "Reserved",
     filename: "placeholder.jpg",
     category: "drawings",
     creator: "Unknown",
     createDate: "dd/mm/yyyy",
               form: "undefined",
               type: "undefined",
               subForm: "undefined"
},
 {
     title: "Reserved",
     filename: "placeholder.jpg",
     category: "comics",
     creator: "Unknown",
     createDate: "dd/mm/yyyy",
               form: "undefined",
               type: "undefined",
               subForm: "undefined"
},
]


constructor(
    private route: Router,
  ) {}

 //url: Observable<UrlSegment[]> = this.route.url.replace('/','').toString();
 url: String = this.route.url.replace('/','').toString();

  ngOnInit(): void {
    console.log('active route: '  + this.route.url);
  }

}

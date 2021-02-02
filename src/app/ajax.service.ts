import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  apiUrl = "http://securoserv.epizy.com/dedicated/index.php?event=ajax";

  constructor(private http: HttpClient) { }

  getCallback() {
  this.http.get(this.apiUrl).subscribe((res:Response)=> console.log(res.json()));
  return this.http.get(this.apiUrl);
  }
}

  //get(): Observable<any> {
    //this.http.get(this.apiurl).subscribe((res:Response)=> console.log(res.json()));
    // return this.http.get(this.apiurl, {responseType: 'json'});
  //}

/* handleError(error) {
   let errorMessage = '';
   if (error.error instanceof ErrorEvent) {
     // client-side error
     errorMessage = `Error: ${error.error.message}`;
   } else {
     // server-side error
     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
   }
   console.log('error: ' + errorMessage);
 } */

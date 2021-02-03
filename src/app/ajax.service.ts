import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  apiUrl = "https://api.beta.twikey.com/creditor";
  apiToken = "760200C4479699F032E73B77F938A6FB44EEF81E";
  errorMessage: string;

  constructor(private http: HttpClient) { }
  body = 'Angular POST Request Example';

  login() {
  this.http.post<any>(this.apiUrl, this.body, {'Content-Type': 'application/json'}).subscribe({
  next: data => {
  this.apiToken = data.apiToken;
  },
  error: error => {
  this.errorMessage = error.message;
  console.error('error run into: ', error);
    }
   })
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

import { Injectable, TestabilityRegistry } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
url = 'http://localhost:3000/datatables/';
  constructor(private http: HttpClient) { }
  table() {
return this.http.get(this.url);
  }

}

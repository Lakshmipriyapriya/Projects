
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
 };
@Injectable({
  providedIn : 'root'
})
export class ApiService {
   apiUrl = 'http://localhost:3000/book';
  constructor(private http: HttpClient) {
  }
getBooks() {
  return this.http.get(`${this.apiUrl}`);
}

getBookById(id) {
   return this.http.get(`${this.apiUrl}/${id}`);
}
postBooks(data) {
return this.http.post(this.apiUrl, data);
}
updateBook(id, data) {
return this.http.put(`${this.apiUrl}/${id}`, data);
}
deleteBook(id) {
  return this.http.delete(`${this.apiUrl}/${id}`);
}
}



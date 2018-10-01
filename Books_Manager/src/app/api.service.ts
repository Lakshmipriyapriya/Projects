
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn : 'root'
})
export class ApiService {
   apiUrl = 'http://localhost:3000/book';
  constructor(private http: HttpClient, private router: Router) {
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
postData(userData) {
  const url = `http://localhost:3000/book/signup`;
  return this.http.post(url, userData);
}

login(userInfos) {
  const url = `http://localhost:3000/book/login`;
  return this.http.post(url, userInfos);
}

}



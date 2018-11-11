import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { registerModuleFactory } from '@angular/core/src/linker/ng_module_factory_loader';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
     Apiurl = 'http://localhost:3000/ticket';
     categoryUrl = 'http://localhost:3000/category';

  constructor(private http: HttpClient, private router: Router) { }

  signup(userData) {
    const  url = 'http://localhost:3000/signup';
    return this.http.post(url, userData );
  }
  login(loginDatas) {
    const url = 'http://localhost:3000/signup/login';
    return this.http.post(url, loginDatas);
  }
  getTicket() {
    const url = 'http://localhost:3000/ticket/all';
    return this.http.get(url);
  }
  getTicketById(id) {
    return this.http.get(`${this.Apiurl}/${id}`);
 }
 postTicket(ticketData) {
  return this.http.post(this.Apiurl, ticketData);
  }
  updateTicket(id, data) {
    return this.http.put(`${this.Apiurl}/${id}`, data);
  }
  deleteTicket(id) {
   return this.http.delete(`${this.Apiurl}/${id}`);
  }
  getCategory() {
    return this.http.get(`${this.categoryUrl}`);
  }
  postCategory(data) {
    return this.http.post(this.categoryUrl, data);
  }
  updateCategory(id, data) {
    return this.http.put(`${this.categoryUrl}/${id}`, data);
  }

}

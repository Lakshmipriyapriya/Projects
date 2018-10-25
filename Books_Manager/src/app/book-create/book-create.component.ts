import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  bookCreate: FormGroup;
  submitted = false;


  postedData = {
    isbn: '',
    title: '',
    author: '',
    description: '',
    publisher: ''
  };
  constructor(private api: ApiService, private fb: FormBuilder , private router: Router) {

   }
   postBooks() {
    console.log(this.postedData);
     this.api.postBooks(this.postedData).subscribe((res: any) => this.postedData = res);

  }

  ngOnInit() {
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/logout']);
  }

}

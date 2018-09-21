import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  postedData = {
    isbn: '',
    title: '',
    author: '',
    description: '',
    publisher: ''
  };
  constructor(private api: ApiService) {

   }
   postBooks() {
    console.log(this.postedData);
     this.api.postBooks(this.postedData).subscribe((res: any) => this.postedData = res);
   }
  ngOnInit() {

  }
}

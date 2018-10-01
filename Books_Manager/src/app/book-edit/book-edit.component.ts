import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})

export class BookEditComponent implements OnInit {
  books: any = {};
  bookId: any;
  updateBook: FormGroup;
  constructor(private route: ActivatedRoute, private  api: ApiService, private router: Router, private fb: FormBuilder) {

   }
   updateData = {
    isbn: '',
    title: '',
    author: '',
    description: '',
    publisher: ''
  };

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.bookId = params.id;
      console.log('book id from router : ', this.bookId);
    });
    this.api.getBookById(this.bookId).subscribe(data => {
      this.books = data;
    });
  }

updateBooks(updateData) {
  console.log('book edited data : ', updateData);
  this.api.updateBook(this.bookId, updateData).subscribe(data => {
    updateData = data;
  });
}
}

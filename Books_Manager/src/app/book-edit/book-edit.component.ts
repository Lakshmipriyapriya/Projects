import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {BookDetailComponent} from '../book-detail/book-detail.component';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})

export class BookEditComponent implements OnInit {
  books: any = {};
  bookId: any;
  updateBook: FormGroup;
  constructor(private route: ActivatedRoute, private  api: ApiService, private router: Router , private mat: MatDialog) {

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
  const dialogbox = new MatDialogConfig();
  dialogbox.disableClose = true;
  dialogbox.autoFocus = true;
  const dialogdata = this.mat.open(BookDetailComponent, dialogbox);
  dialogdata.afterClosed().subscribe(info => {
    if (info != null) {
  this.api.updateBook(this.bookId, updateData).subscribe(data => {
    updateData = data;
  });
}
});
}
logout() {
  localStorage.clear();
  this.router.navigate (['/logout']);
}
}

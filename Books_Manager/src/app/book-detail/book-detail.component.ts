import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: any = {};
  constructor(private router: ActivatedRoute, private  api: ApiService) {
    // this.id = this.router.params;
    // console.log('id details: ', this.id);
   }

  ngOnInit() {

  }
  deleteBook(id) {
    this.api.deleteBook(id).subscribe(res => {
      this.book = res;
      console.log('res is :', res);
    });
  }

}

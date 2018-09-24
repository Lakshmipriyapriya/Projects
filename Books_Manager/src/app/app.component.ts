import { Component, OnInit } from '@angular/core';
import {SwUpdate} from '@angular/service-worker';
import {ApiService} from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'BooksManager';
update = false;
book: any;
dataflag = false;
data: any;
constructor(private sw: SwUpdate, private api: ApiService) {
  sw.available.subscribe(event => {
    // this.update = true;
    sw.activateUpdate().then(() => {
      document.location.reload();
    });
    });
  }
  ngOnInit() {
  this.api.getBooks().subscribe(res => {
    this.data = res;
    this.dataflag = true;
    console.log('data.....', this.data);
  });
}
}

export interface Books {
  isbn: string;
  title: string;
  author: string;
  description: string;
  publisher: string;
}

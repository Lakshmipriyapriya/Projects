import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Books} from '../app.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books: Books[];
 book: (any);
 constructor(private api: ApiService, private router: Router ) { }
 columnsToDisplay = ['isbn', 'title', 'author' , 'description', 'publisher', 'actions'];

ngOnInit() {
this.getListById();
}
getListById() {
this.api.getBooks().subscribe((data: Books[]) => {
this.books = data;
console.log(data);
});
}

editBook(id) {
this.router.navigate([`/edit/${id}`]);
}
deleteBook(id) {
this.api.deleteBook(id).subscribe((res) => {
  this.getListById();
  // console.log(res);
});
}

}



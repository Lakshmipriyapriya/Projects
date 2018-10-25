import { Component, OnInit, ViewChild } from '@angular/core';
import {ApiService} from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Books} from '../app.component';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {DialogComponent} from '../dialog/dialog.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  data: (any);
  temp: boolean;
  books: Books[];
  book: (any);
 constructor(private api: ApiService, private router: Router, private mat: MatDialog) {
   this.temp = false;
  }
 columnsToDisplay = ['isbn', 'title', 'author' , 'description', 'publisher', 'updated_date', 'actions'];

ngOnInit() {
this.getListById();

}
getListById() {
this.api.getBooks().subscribe((data: Books[]) => {
this.books = data;
this.temp = true;
console.log(data);
});
}

editBook(id) {
this.router.navigate([`/edit/${id}`]);
}
deleteBook(id) {

const dialogbox = new MatDialogConfig();
  dialogbox.disableClose = true;
  dialogbox.autoFocus = true;
  const dialogdata = this.mat.open(DialogComponent, dialogbox);
  dialogdata.afterClosed().subscribe(info => {
    if (info != null) {
      this.api.deleteBook(id).subscribe((res) => {
        this.getListById();
      });
    }
  });
}

logout() {
  localStorage.clear();
  this.router.navigate(['/login']);
}
}




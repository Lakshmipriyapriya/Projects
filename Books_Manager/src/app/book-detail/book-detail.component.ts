import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

constructor (private dialogref: MatDialogRef<BookDetailComponent>) {}
  ngOnInit() {

  }
  edit() {
this.dialogref.close('info');
  }
  cancle() {
this.dialogref.close();
  }

}

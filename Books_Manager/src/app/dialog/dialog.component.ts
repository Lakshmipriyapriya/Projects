import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(private dialogref: MatDialogRef<DialogComponent>) { }
  ngOnInit() {
  }
delete() {
this.dialogref.close('data');
}
cancle() {
  this.dialogref.close();
}

}

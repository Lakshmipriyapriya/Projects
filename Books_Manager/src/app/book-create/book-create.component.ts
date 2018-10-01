import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';

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
  constructor(private api: ApiService, private fb: FormBuilder) {

   }
   postBooks() {
    console.log(this.postedData);
     this.api.postBooks(this.postedData).subscribe((res: any) => this.postedData = res);

  }

  ngOnInit() {
// this.bookCreate = this.fb.group({
//   title: ['', Validators.required, Validators.pattern('^[a-zA-Z \-\']+')],
//             author: ['', Validators.pattern('^[a-zA-Z \-\]+')],
//             description:  ['', Validators.pattern('^[a-zA-Z \-\]+')],
//             publisher:  ['', Validators.pattern('^[a-zA-Z \-\]+')],

// });
  }

}

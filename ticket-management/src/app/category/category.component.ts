import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
export interface Category {
  value: String;
  viewValue: String;
}

export interface Visiblity {
  value: boolean;
  viewValue: boolean;
}
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoryList: Category[] = [
    {value: 'Primary', viewValue: 'Primary'},
    {value: 'Secondary', viewValue: 'Secondary'},
  ];

  visiblity: Visiblity[] = [
    {'value': true, 'viewValue': true},
    {'value': false, 'viewValue': false}
  ];
 logout() {
   localStorage.clear();
   this.router.navigate(['/home']);
 }

  constructor(private router: Router) { }

  ngOnInit() {
  }

}

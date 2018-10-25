import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ApiService } from '../api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  constructor(private router: Router, private api: ApiService) {}
  clickhere() {
Swal(
  'welcome',
  'login',
 'info'

);
}
  oauthLogin() {
    console.log('this oauthLogin console');
    this.api.oauthsignup().subscribe((res: any ) => {
    const tokenForGoogle = res;
    console.log('this oauthLogin console2');
    localStorage.setItem('token', res.token);
    this.router.navigate(['/books']);

    });
  }

  signIn() {
console.log('signed in');
// this.router.navigate(['/books']);
// alert ("signed in ");
  }

tokenChecking() {
  Swal(
    'First Login',
    'Then enter into bookList',
    'info'
    // 'cool'
  );
if (localStorage.length !== 0 ) {
this.router.navigate(['/books']);
console.log('navigated to books');
}
else {
this.router.navigate(['/login']);
}
  }
  ngOnInit() {

  }

}

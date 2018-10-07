import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  signIn() {
console.log('signed in');
// this.router.navigate(['/books']);
// alert ("signed in ");
  }
tokenChecking() {
if (localStorage.length !== 0 ) {
this.router.navigate(['/books']);
console.log('navigated to books');
}
else{
this.router.navigate(['/login']);
}
}
  constructor(private router: Router) {}

  ngOnInit() {

  }

}

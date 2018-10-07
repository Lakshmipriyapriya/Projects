import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  usersData = {
userName: '',
email: '',
password: ''
  };
  postUserDetails(usersData) {
    console.log(usersData);
     this.api.postData(usersData).subscribe((res: any) => { usersData = res;
     console.log('Registered');
     console.log(usersData);

     this.router.navigate(['/login']);
    // this.api.signupUser(this.usersData).subscribe(res => {
    //   // localStorage.setItem('token', res.)
    // });
     });
  }
  constructor(private api: ApiService, private router: Router ) {

   }


  ngOnInit() {
  }
  tokenChecking() {
    if (localStorage.length !== 0 ) {
    this.router.navigate(['/books']);
    console.log('navigated to books');
    }

}
}

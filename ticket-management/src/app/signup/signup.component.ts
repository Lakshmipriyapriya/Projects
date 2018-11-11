import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {Router} from '@angular/router';
import { from } from 'rxjs';
import swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userData =  {
  firstName : '',
  lastName : '',
  role : '',
  email : '',
  password : ''
  };
  postUserDetails(userData) {
    console.log('userDatassss', userData);
    this.api.signup(userData).subscribe((res: any) => {
      userData = res;
      console.log('res data from login : ', res);
    });
    this.router.navigate(['/login']);
  }
  tokenChecking() {
    if (localStorage.length !== 0) {
      this.router.navigate(['/ticket']);
    }
    else{
      swal(
        'Not Allowed',
        'First login to raise your issue',
        'warning'
      );
      this.router.navigate(['/login']);
    }
  }



  constructor(private api: ApiService , private router: Router) { }

  ngOnInit() {
  }

}

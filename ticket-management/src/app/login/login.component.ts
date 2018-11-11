import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import { from } from 'rxjs';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password: boolean;

  loginData = {
    email: '',
    password: ''
  };
  loginOperation(loginData) {
    this.api.login(loginData).subscribe((res: any) => {
     this.loginData = res;
     localStorage.setItem('token', res.token);
     console.log('res from login : ', res);
      this.router.navigate(['/ticket']);
    });
  }

  tokenChecking() {
    if (localStorage.length !== 0 ) {
    this.router.navigate(['/ticket']);
    }
    else{
      swal(
        'Not Allowed',
        'First login to raise your issue',
        'warning'
      );
    }
  }

  text() {
    this.password = ! this.password;
    }

  constructor(private fb: FormBuilder, private api: ApiService , private router: Router) {
    this.password = false;

  }

  ngOnInit() {
  }

}

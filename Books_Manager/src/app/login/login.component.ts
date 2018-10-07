import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  password: boolean;
UserInfo = {
email: '',
password: ''
};
tokenChecking() {
  if (localStorage.length !== 0 ) {
  this.router.navigate(['/books']);
  console.log('navigated to books');
  }
}
loginUser(UserInfo) {
this.api.login(UserInfo).subscribe((res: any) => {
this.UserInfo = res;
localStorage.setItem('token', res.token);

console.log('token:', res.token);
console.log('successfull:', UserInfo);
// alert('userinfo');

this.router.navigate(['/books']);
});
}

text() {
this.password = ! this.password;
}

  constructor(private fb: FormBuilder,
    private api: ApiService,
    private router: Router) {
      this.password = false;


    }

  ngOnInit() {
  }


}


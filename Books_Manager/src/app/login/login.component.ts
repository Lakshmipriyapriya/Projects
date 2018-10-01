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
UserInfo = {
email: '',
password: ''
};
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
  constructor(private fb: FormBuilder,
    private api: ApiService,
    private router: Router) {

    }

  ngOnInit() {
  }

}


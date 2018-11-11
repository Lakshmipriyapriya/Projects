import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router' ;
import {ApiService} from '../api.service';
import { from } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tokenChecking() {
    if (localStorage.length !== 0 ) {
    this.router.navigate(['/ticket']);
    }
    else{
      Swal(
        'welcome',
        'Login to enter into Ticket Creation',
       'info'

      );
      this.router.navigate(['/login']);

    }
  }

  constructor(private api: ApiService , private router: Router) { }

  ngOnInit() {
  }

}

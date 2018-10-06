import { Component, OnInit } from '@angular/core';
import {ApiService} from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DataTables';
  data: object;
  constructor(private api: ApiService) { }
ngOnInit() {
this.api.table().subscribe(res => {
 this.data = res;
});
}

}




import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BooksManager';
}
export interface Books {
  isbn: string;
  title: string;
  author: string;
  description: string;
  publisher: string;
}

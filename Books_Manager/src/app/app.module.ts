import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {ApiService} from './api.service';
import {ReactiveFormsModule} from '@angular/forms'
import {MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const bookRoutes: Routes =
 [
    {
      path: 'books',
      component: BookComponent,
      data:  {title: 'bookList'}
    },
    {
      path: 'delete/:id',
      component: BookDetailComponent,
      data:  {title: 'book Details'}
    },
    {
      path: 'books-create',
      component: BookCreateComponent,
      data:  {title: 'book Create'}
    },
    {
      path: 'edit/:id',
      component: BookEditComponent,
      data:  {title: 'book Edit'}
    },
    {
      path: '',
      redirectTo: '/books',
      pathMatch : 'full'
    },
    {
    path: '**',
    redirectTo: '/books'
    }
  ];
@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookDetailComponent,
    BookCreateComponent,
    BookEditComponent
  ],
  imports: [
    RouterModule.forRoot(bookRoutes),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]

})
export class AppModule { }

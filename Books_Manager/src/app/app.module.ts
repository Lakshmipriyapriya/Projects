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
import {ReactiveFormsModule} from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatDialogModule} from '@angular/material';
import {DataTablesModule} from 'angular-datatables';

// import { DataTablesModule } from 'angular-datatables';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DialogComponent } from './dialog/dialog.component';


const bookRoutes: Routes =
 [
   {
     path: 'signup',
     component: SignupComponent,
   },
   {
     path: 'login',
     component: LoginComponent,
   },
    {
      path: 'home',
      component: HomePageComponent,
    },
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
      redirectTo: '/home',
      pathMatch : 'full'
    },
    {
    path: '**',
    redirectTo: '/home'
    }
  ];
@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookDetailComponent,
    BookCreateComponent,
    BookEditComponent,
    LoginComponent,
    SignupComponent,
    HomePageComponent,
    DialogComponent,
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
    MatMenuModule,
    MatIconModule,
    MatCheckboxModule,
    FlexLayoutModule,
    MatDialogModule,
    DataTablesModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent, BookDetailComponent]

})
export class AppModule { }

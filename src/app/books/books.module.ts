import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AddBookComponent } from '../books/add-book/add-book.component';
import { EditBookComponent } from '../books/edit-book/edit-book.component';
import { BookListComponent } from '../books/book-list/book-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MaterialModule} from '../material/material.module';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [AddBookComponent,EditBookComponent,BookListComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule
  ],
  exports:[
    AddBookComponent,
    EditBookComponent,
    BookListComponent
  ]
})
export class BooksModule { }

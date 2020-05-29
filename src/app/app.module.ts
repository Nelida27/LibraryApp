import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { ConfirmationDialogComponent } from './shared/confirmation-dialog/confirmation-dialog.component';
import { ChangeCategoryModalComponent } from './shared/change-category-modal/change-category-modal.component';
import { ChartsModule } from 'ng2-charts';
import { ReportsModule } from './reports/reports.module';
import { BooksModule } from './books/books.module';


@NgModule({
  declarations: [
    AppComponent,
    ConfirmationDialogComponent,
    ChangeCategoryModalComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    ReportsModule,
    BooksModule


  ],

  entryComponents: [ConfirmationDialogComponent, ChangeCategoryModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { MAT_DATE_LOCALE } from '@angular/material';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    ConfirmationDialogComponent,
    ChangeCategoryModalComponent,
    PageNotFoundComponent,

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
  providers:[{provide: MAT_DATE_LOCALE, useValue: 'en-GB'}],

  entryComponents: [ConfirmationDialogComponent, ChangeCategoryModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

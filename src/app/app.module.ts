import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBookComponent } from './book/add-book/add-book.component';
import { EditBookComponent } from './book/edit-book/edit-book.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from './material/material.module';
import { ConfirmationDialogComponent } from './shared/confirmation-dialog/confirmation-dialog.component';
import { ChangeCategoryModalComponent } from './shared/change-category-modal/change-category-modal.component';
import { ChartsModule } from 'ng2-charts';

import {ReportsModule} from './reports/reports.module';


@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    EditBookComponent,
    HomeComponent,
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
    ReportsModule
    

  ],

  entryComponents: [ConfirmationDialogComponent,ChangeCategoryModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

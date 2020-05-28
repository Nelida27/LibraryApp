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
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { ChangeCategoryModalComponent } from './change-category-modal/change-category-modal.component';
import { ReportsComponent } from './reports/reports.component';
import { AddReportComponent } from './reports/add-report/add-report.component';
import { EditReportComponent } from './reports/edit-report/edit-report.component';
import { ShowReportsComponent } from './reports/show-reports/show-reports.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ChartsModule } from 'ng2-charts';
import { TableReportComponent } from './reports/table-report/table-report.component';
import { TableSelectedFieldsComponent } from './reports/table-selected-fields/table-selected-fields.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    EditBookComponent,
    HomeComponent,
    ConfirmationDialogComponent,
    ChangeCategoryModalComponent,
    ReportsComponent,
    AddReportComponent,
    EditReportComponent,
    ShowReportsComponent,
    BarChartComponent,
    TableReportComponent,
    TableSelectedFieldsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule

  ],
  providers: [ FilterPipe],
  entryComponents: [ConfirmationDialogComponent,ChangeCategoryModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

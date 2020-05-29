import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AddReportComponent} from "./add-report/add-report.component";
import {EditReportComponent} from "./edit-report/edit-report.component";
import {ShowReportsComponent} from "./show-reports/show-reports.component";
import {TableReportComponent} from "./table-report/table-report.component";
import {ReportsComponent} from "./reports.component";
import {BarChartComponent} from "./bar-chart/bar-chart.component";
import {TableSelectedFieldsComponent} from "./table-selected-fields/table-selected-fields.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MaterialModule} from '../material/material.module';
import { AppRoutingModule } from '../app-routing.module';
import { ChartsModule } from 'ng2-charts';
import { FilterPipe } from '../shared/filter.pipe';


@NgModule({
  declarations: [
    AddReportComponent,
    EditReportComponent,
    ShowReportsComponent,
    TableReportComponent,
    ReportsComponent,
    BarChartComponent,
    TableSelectedFieldsComponent,
    FilterPipe

    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule,
    ChartsModule
  
  
  ],
  providers: [ FilterPipe],
  exports:[
    AddReportComponent,
    EditReportComponent,
    ShowReportsComponent,
    TableReportComponent,
    ReportsComponent,
    BarChartComponent,
    TableSelectedFieldsComponent
  ]
})
export class ReportsModule { }

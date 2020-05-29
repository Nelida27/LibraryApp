import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditBookComponent } from './book/edit-book/edit-book.component';
import { AddBookComponent } from './book/add-book/add-book.component';
import { ReportsComponent } from './reports/reports.component';
import { AddReportComponent } from './reports/add-report/add-report.component';
import { EditReportComponent } from './reports/edit-report/edit-report.component';
import { ShowReportsComponent } from './reports/show-reports/show-reports.component';
import { TableReportComponent } from './reports/table-report/table-report.component';
import { BarChartComponent } from './reports/bar-chart/bar-chart.component';

TableReportComponent


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'editbook/:id',
    component: EditBookComponent
  },
  {
    path: 'addbook',
    component: AddBookComponent
  },
  
  {
    path: 'reports',
    component: ReportsComponent,

    children: [{
      path: '',
      component: ShowReportsComponent
    },
    {
      path: 'addreport',
      component: AddReportComponent
    },
    {
      path: 'editreport/:reportId',
      component: EditReportComponent
    },
    {
      path: 'chart',
      component: BarChartComponent
    },
    {
      path: 'table/:reportId',
      component: TableReportComponent
    }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

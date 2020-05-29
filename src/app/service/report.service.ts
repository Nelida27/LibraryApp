import { Injectable } from '@angular/core';
import { Report } from '../models/report';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  availableFields : string[]=["category","title","description","author","date"];
  selectedFields :string[]= [];
  el:any;
  idCounter;
  reports: Report[] = [];

  constructor() { }

  getAllReports(): Report[] {
    if (localStorage.getItem('reports') === null) {
      this.reports = [];
    } else {
      this.reports = JSON.parse(localStorage.getItem('reports'));
    }
    return this.reports;
  }

  getReport(id) {

    let report: Report;
    this.reports.map(val => {
      if (val.reportId == id) report = val;
    });
    return report;

  }

  reportEdit(report: Report) {
    this.reports = JSON.parse(localStorage.getItem('reports'));
    this.reports.map((val, index) => {
      if (val.reportId == report.reportId) { this.reports[index] = report; }
    });
    localStorage.setItem('reports', JSON.stringify(this.reports));

  }

  deleteRow(report: Report) {
    JSON.parse(localStorage.getItem('reports'));
    let index = this.reports.indexOf(report);
    this.reports.splice(index, 1);
    localStorage.setItem('reports', JSON.stringify(this.reports));

  }

  addReport(report: Report) {
    //report.reportId = this.reports.length + 1;
    //this.reports.push(report);
    this.idCounter = localStorage.getItem('counter-reports') || 1;
    report.reportId = this.idCounter++;
    localStorage.setItem('counter-reports', JSON.stringify(this.idCounter));
    let bookData = [];
    if (localStorage.getItem('reports') === null) {
      bookData = [];
      bookData.push(report);
      localStorage.setItem('reports', JSON.stringify(bookData));
    } else {
      bookData = JSON.parse(localStorage.getItem('reports'));
      bookData.push(report);
      localStorage.setItem('reports', JSON.stringify(bookData));
    }
  }

getAvailable(){
  return this.availableFields;
}

getSelectedFields(){
  return this.selectedFields;
}

  onAddClick(fields){
    
    let index = this.availableFields.indexOf(fields);
    this.selectedFields.push(...this.availableFields.splice(index, 1));
    
  }
  onRemoveClick(field){
    
    let index = this.selectedFields.indexOf(field);
    this.availableFields.push(...this.selectedFields.splice(index, 1));
  
  }

}

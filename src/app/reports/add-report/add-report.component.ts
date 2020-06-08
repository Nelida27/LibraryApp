import { Component, OnInit, ViewChild, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { ReportService } from '../../service/report.service';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { FormArray } from '@angular/forms';
import { Report } from 'src/app/models/report';


@Component({
  selector: 'app-add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.scss']
})
export class AddReportComponent implements OnInit {

  report: Report = {
    reportId: 0,
    reportName: '',
    reportDesc: '',
    reportType: '',
    fields: []
  };

  addReportForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private reportService: ReportService,
    private router: Router

  ) { }

  ngOnInit() {

    this.addReportForm = this.fb.group({
      reportName: ['', Validators.required],
      reportDesc: ['', Validators.required],
      reportType: ['', Validators.required]

    });

  }

  checkError = (controlName: string, errorName: string) => {
    return this.addReportForm.controls[controlName].hasError(errorName);
  }

  resetFields() {
    this.addReportForm = this.fb.group({
      reportName: ['', Validators.required],
      reportDesc: ['', Validators.required],
      reportType: ['', Validators.required]

    });
  }

  onSubmit() {
    this.report.reportName = this.addReportForm.value.reportName;
    this.report.reportDesc = this.addReportForm.value.reportDesc;
    this.report.reportType = this.addReportForm.value.reportType;

    if (this.addReportForm.valid) {
      this.reportService.addReport(this.report);
      this.resetFields();
      this.router.navigateByUrl('/reports');
    }

  }

}

import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { ReportService } from '../../service/report.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Report } from 'src/app/models/report';


@Component({
  selector: 'app-edit-report',
  templateUrl: './edit-report.component.html',
  styleUrls: ['./edit-report.component.scss']
})

export class EditReportComponent implements OnInit {

  report: Report;
  editReportForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private reportService: ReportService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      if (param) {
        this.report = this.reportService.getReport(param.reportId);
        this.editForm();
      }
    });
  }

  editForm() {

    this.editReportForm = this.fb.group({
      reportId: [this.report.reportId],
      reportName: [this.report.reportName, Validators.required],
      reportDesc: [this.report.reportDesc, Validators.required],
      reportType: [this.report.reportType, Validators.required],
      fields: [this.report.fields]

    });

  }

  checkError = (controlName: string, errorName: string) => {
    return this.editReportForm.controls[controlName].hasError(errorName);
  }

  resetFields() {
    this.editReportForm = this.fb.group({
      reportId: [this.report.reportId],
      reportName: [this.report.reportName, Validators.required],
      reportDesc: [this.report.reportDesc, Validators.required],
      reportType: [this.report.reportType, Validators.required],
      fields: [this.report.fields]
    });
  }



  onSubmit() {

    if (this.editReportForm.value.reportType === 'chart') {
      this.editReportForm.value.fields = [];
    }

    if (this.editReportForm.valid) {
      this.reportService.reportEdit(this.editReportForm.value);
      this.router.navigateByUrl('/reports');
    }

  }

}

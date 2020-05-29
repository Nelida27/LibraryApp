import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl,FormBuilder } from '@angular/forms';
import {ReportService } from '../../service/report.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Report } from 'src/app/models/report';

@Component({
  selector: 'app-edit-report',
  templateUrl: './edit-report.component.html',
  styleUrls: ['./edit-report.component.scss']
})

export class EditReportComponent implements OnInit {
  report:Report;
  editReportForm:FormGroup;
  msg:string = "";
  constructor(
    private fb: FormBuilder,
    private reportService:ReportService,
    private router:Router,
    private route: ActivatedRoute
   ) {}

  ngOnInit() {
    this.route.params.subscribe(param => {
      if (param) {
        this.report = this.reportService.getReport(param.reportId);
        this.editForm();
      }
    });
  }

  editForm(){
    this.editReportForm = this.fb.group({
      reportId:[this.report.reportId],
      reportName:[this.report.reportName,Validators.required],
      reportDesc:[this.report.reportDesc,Validators.required],
      reportType:[this.report.reportType,Validators.required]
    });

  }

  resetFields(){
    this.editReportForm = this.fb.group({
      reportId:[""],
      reportName:["",Validators.required],
      reportDesc:["",Validators.required],
      reportType:["",Validators.required]
    });
  }

  onSubmit(){

    if(this.editReportForm.valid){
      this.reportService.reportEdit(this.editReportForm.value);
      this.router.navigateByUrl("/reports");
   }else {
      this.msg = 'Please complete form';
    }

  }

}

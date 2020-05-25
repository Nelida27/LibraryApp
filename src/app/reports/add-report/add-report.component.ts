import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl,FormBuilder } from '@angular/forms';
import {ReportService } from '../../service/report.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.scss']
})
export class AddReportComponent implements OnInit {

  addReportForm:FormGroup;
  msg:string = "";
  constructor(private fb: FormBuilder,private reportService:ReportService,private router:Router) { }

  ngOnInit() {

    this.addReportForm = this.fb.group({
      reportId:[''],
      reportName:['',Validators.required],
      reportDesc:['',Validators.required],
      reportType:['',Validators.required]
    });
  }

  resetFields(){
    this.addReportForm = this.fb.group({
      reportId:[''],
      reportName:['',Validators.required],
      reportDesc:['',Validators.required],
      reportType:['',Validators.required]
    });
  }

  onSubmit(){
    if(this.addReportForm.valid){
      this.reportService.addReport(this.addReportForm.value);
      this.resetFields();
      this.router.navigateByUrl("/reports");
    }
      else {
      this.msg = 'Please complete form';
    }


  }

}

import { Component, OnInit, ViewChild, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { ReportService } from '../../service/report.service';
import { Router } from '@angular/router';
import { TableSelectedFieldsComponent } from "../table-selected-fields/table-selected-fields.component";
import { ChangeDetectorRef } from '@angular/core';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.scss']
})
export class AddReportComponent implements OnInit {
  addReportForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private reportService: ReportService,
    private router: Router,
    private cdref: ChangeDetectorRef
  ) { }

  ngOnInit() {


    this.addReportForm = this.fb.group({
      reportId: [''],
      reportName: ['', Validators.required],
      reportDesc: ['', Validators.required],
      reportType: ['', Validators.required],
      availableFields: this.fb.array([]),
      selectedFields: this.fb.array([])
    });


  }


  ngAfterContentChecked() {

    this.cdref.detectChanges();

  }

  get availableFields(): FormArray {
    return this.addReportForm.get('availableFields') as FormArray;
  }
  get selectedFields(): FormArray {
    return this.addReportForm.get('selectedFields') as FormArray;
  }

  onVoted(event) {
    this.availableFields.push(new FormControl(event));
  }
  onSelect(event) {

    this.selectedFields.push(new FormControl(event));
   
  }

  resetFields() {
    this.addReportForm = this.fb.group({
      reportId: [''],
      reportName: ['', Validators.required],
      reportDesc: ['', Validators.required],
      reportType: ['', Validators.required]

    });
  }

  onSubmit() {

    if (this.addReportForm.valid) {
      this.reportService.addReport(this.addReportForm.value);
      this.resetFields();
      this.router.navigateByUrl("/reports");
    }


  }

}

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';
import * as XLSX from 'xlsx';
import { ReportService } from 'src/app/service/report.service';
import { BookService } from 'src/app/service/book.service';
import { Report } from 'src/app/models/report';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import * as jsPDF from 'jspdf';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-table-report',
  templateUrl: './table-report.component.html',
  styleUrls: ['./table-report.component.scss'],

})

export class TableReportComponent implements OnInit {
  isEdit = false;
  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource(this.getBooks());
  selection = new SelectionModel<any>(true, []);
  report: Report;
  editReportForm: FormGroup;



  @ViewChild('pdfTable', { static: false }) pdfTable: ElementRef;
  @ViewChild('TABLE', { static: true }) table: ElementRef;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private reportService: ReportService,
    private bookService: BookService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,

    ) {}

  ngOnInit() {

    this.route.params.subscribe(param => {
      if (param) {
        this.report = this.reportService.getReport(param.reportId);
        this.displayedColumns = this.report.fields ;
        this.editForm();

      }
    });

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getBooks();
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

  getBooks() {
    return this.bookService.getAllBooks();
  }

  exportToPdf() {
    const doc = new jsPDF();
    const specialElementHandlers = {
      '#editor' (element, renderer) {
        return true;
      }
    };
    const pdfTable = this.pdfTable.nativeElement;
    doc.fromHTML(pdfTable.innerHTML, 15, 15, {
      width: 190,
      elementHandlers: specialElementHandlers
    });
    doc.save('tableToPdf.pdf');
  }


  exportTOExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.table.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    /* save to file */
    XLSX.writeFile(wb, 'Report.xlsx');

  }
  onReset() {
      this.editReportForm = this.fb.group({
        reportId: [this.report.reportId],
        reportName: [this.report.reportName, Validators.required],
        reportDesc: [this.report.reportDesc, Validators.required],
        reportType: [this.report.reportType, Validators.required],
        fields: [this.report.fields]

      });

  }

  onSubmit() {

    if (this.editReportForm.valid) {
      this.reportService.reportEdit(this.editReportForm.value);
    }

  }

}




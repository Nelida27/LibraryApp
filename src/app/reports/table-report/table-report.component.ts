import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';
import * as XLSX from 'xlsx';
import { ReportService } from 'src/app/service/report.service';
import { BookService } from 'src/app/service/book.service';
import {Book} from 'src/app/models/book';
import { Report } from 'src/app/models/report';



@Component({
  selector: 'app-table-report',
  templateUrl: './table-report.component.html',
  styleUrls: ['./table-report.component.scss'],
  
})
export class TableReportComponent implements OnInit {

  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource(this.getBooks());
  selection = new SelectionModel<any>(true, []);
 
  @ViewChild('TABLE', { static: true }) table: ElementRef;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

 constructor(private reportService:ReportService,
  private bookService:BookService,
  private router:Router,
  private route: ActivatedRoute) { 
   

 
  
 }

  ngOnInit() {

    
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getHeaders();
    this.getBooks();
  }
  /** Whether the number of selected elements matches the total number of rows. */




  getHeaders(){
    
    this.reportService.getSelectedFields().forEach(item=>{
     this. displayedColumns.push(item);
    });
    
   return this.displayedColumns;
  }

  getBooks(){
   
   return  this.bookService.getAllBooks();
  
    }
 
  exportTOExcel()
{
  const ws: XLSX.WorkSheet=XLSX.utils.table_to_sheet(this.table.nativeElement);
  const wb: XLSX.WorkBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  
  /* save to file */
  XLSX.writeFile(wb, 'Report.xlsx');
  
}
}
 



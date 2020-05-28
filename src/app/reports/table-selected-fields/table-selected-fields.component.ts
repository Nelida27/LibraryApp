import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/service/report.service';
import {FilterPipe} from "../../filter.pipe";


@Component({
  selector: 'app-table-selected-fields',
  templateUrl: './table-selected-fields.component.html',
  styleUrls: ['./table-selected-fields.component.scss']
})
export class TableSelectedFieldsComponent implements OnInit {
  filterdata:string ="";
  availableFields:string[]=[];
  selectedFields:string[]=[];
 

  constructor(private reportService:ReportService,public filter:FilterPipe) { }

  ngOnInit() {
  this.getAllFields();
  this.getAllSelected();

  }


  getAllFields(){
    this.availableFields = this.reportService.getAvailable();
  
    return this.availableFields;
    
  }

  getAllSelected(){
   
    this.selectedFields = this.reportService.getSelectedFields();
    return this.selectedFields;
  }
  onAdd(fields){
   this.reportService.onAddClick(fields);
    
  }
  onRemove(field){
    this.reportService.onRemoveClick(field);
 
  }

}

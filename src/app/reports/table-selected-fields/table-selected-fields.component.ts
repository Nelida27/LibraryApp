import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/service/report.service';


@Component({
  selector: 'app-table-selected-fields',
  templateUrl: './table-selected-fields.component.html',
  styleUrls: ['./table-selected-fields.component.scss']
})
export class TableSelectedFieldsComponent implements OnInit {

  availableFields:string[]=[];
  selectedFields:string[]=[];
 

  constructor(private reportService:ReportService) { }

  ngOnInit() {
  this.getAllFields();
  this.getAllSelected();

  }



  getAllFields(){
    this.availableFields = this.reportService.getAvailable();
    console.log(this.availableFields);
    return this.availableFields;
    
  }

  getAllSelected(){
    console.log(this.selectedFields);
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

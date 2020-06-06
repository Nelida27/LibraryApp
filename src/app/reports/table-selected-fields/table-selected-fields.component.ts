import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ReportService } from 'src/app/service/report.service';
import { FilterPipe } from "../../shared/filter.pipe";


@Component({
  selector: 'app-table-selected-fields',
  templateUrl: './table-selected-fields.component.html',
  styleUrls: ['./table-selected-fields.component.scss']
})

export class TableSelectedFieldsComponent implements OnInit {
  filterAvailable: string = "";
  filterSelected: string = "";
@Input() availableFields: string[] = ["category", "title", "description", "author", "date"];
@Input() selectedFields: string[] = [];


  @Output() data: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Output() change: EventEmitter<string[]> = new EventEmitter<string[]>();

  constructor(
    private reportService: ReportService,
    public filter: FilterPipe
  ) { }

  ngOnInit() {

    this.data.emit(this.availableFields);
    this.change.emit(this.selectedFields);

  }




  onAddFields(fieldA) {
    let index = this.availableFields.indexOf(fieldA);
    this.selectedFields.push(...this.availableFields.splice(index, 1));

  }

  onRemoveFields(fieldS) {
    let index = this.selectedFields.indexOf(fieldS);
    this.availableFields.push(...this.selectedFields.splice(index, 1));
  }

}
import { Component, OnInit } from '@angular/core';
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
  availableFields: string[] = [];
  selectedFields: string[] = [];

  constructor(
    private reportService: ReportService,
    public filter: FilterPipe
  ) { }

  ngOnInit() {

    this.getAvailableFields();
    this.getSelectedFields();

  }

  getAvailableFields() {
    this.availableFields = this.reportService.getAvailableFields();
    return this.availableFields;
  }

  getSelectedFields() {
    this.selectedFields = this.reportService.getSelectedFields();
    return this.selectedFields;
  }

  onAddFields(fieldA) {
    this.reportService.onAddClick(fieldA);
  }

  onRemoveFields(fieldS) {
    this.reportService.onRemoveClick(fieldS);
  }

}

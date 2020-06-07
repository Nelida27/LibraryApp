import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ReportService } from 'src/app/service/report.service';
import { FilterPipe } from '../../shared/filter.pipe';
import { Report } from 'src/app/models/report';


@Component({
  selector: 'app-table-selected-fields',
  templateUrl: './table-selected-fields.component.html',
  styleUrls: ['./table-selected-fields.component.scss']
})

export class TableSelectedFieldsComponent implements OnInit {

  @Input() report: Report;
  filterAvailable: string = '';
  filterSelected: string = '';
  availableFields: string[] = ['category', 'title', 'description', 'author', 'date'];


  constructor(
    private reportService: ReportService,
    public filter: FilterPipe
  ) { }

  ngOnInit() {

    this.report.fields.forEach(x => {
      this.availableFields = this.availableFields.filter(e => e !== x);
    });

  }

  onAddFields(fieldA) {
    const index = this.availableFields.indexOf(fieldA);
    this.report.fields.push(...this.availableFields.splice(index, 1));
  }
  onRemoveFields(fieldS) {
    const index = this.report.fields.indexOf(fieldS);
    this.availableFields.push(...this.report.fields.splice(index, 1));
  }

}

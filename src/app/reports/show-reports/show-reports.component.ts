
import { Component, OnInit, ViewChild, ɵConsole } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort } from '@angular/material/sort';
import { Report } from '../../models/report';
import { ReportService } from '../../service/report.service';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { ConfirmationDialogModel, ConfirmationDialogComponent } from '../../shared/confirmation-dialog/confirmation-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-show-reports',
  templateUrl: './show-reports.component.html',
  styleUrls: ['./show-reports.component.scss']
})
export class ShowReportsComponent implements OnInit {

  displayedColumns: string[] = ['select', 'reportId', 'reportName', 'reportDesc', 'reportType', 'actions'];
  dataSource = new MatTableDataSource(this.getReports());
  selection = new SelectionModel<Report>(true, []);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private reportService: ReportService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getReports(): Report[] {

   return this.reportService.getAllReports();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: Report): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.reportId + 1}`;
  }

  reloadComponent() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/reports']);
  }
  deleteRowData(report: Report): void {

    this.reportService.deleteRow(report);
    this.reloadComponent();

  }
  deleteSelected() {
    this.selection.selected.forEach(item => {

      this.deleteRowData(item);

    });


  }

  confirmDialog(): void {

    const message = `Are you sure you want to delete?`;

    const dialogData = new ConfirmationDialogModel('Confirm Delete', message);

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      maxWidth: '400px',
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {

      if (dialogResult) {
        this.deleteSelected();
      }
    });
  }

}

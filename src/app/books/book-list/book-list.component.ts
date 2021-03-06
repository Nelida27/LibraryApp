import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort } from '@angular/material/sort';
import { Book } from '../../models/book';
import { BookService } from '../../service/book.service';
import { ConfirmationDialogModel, ConfirmationDialogComponent } from '../../shared/confirmation-dialog/confirmation-dialog.component';
// tslint:disable-next-line: max-line-length
import { ChangeCategoryDialogModel, ChangeCategoryModalComponent } from '../../shared/change-category-modal/change-category-modal.component';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
 saveCategory: string;
  displayedColumns: string[] = ['select', 'id', 'title', 'description', 'author', 'category', 'actions'];
  dataSource = new MatTableDataSource(this.getBooks());
  selection = new SelectionModel<Book>(true, []);
  result = '';



  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private bookService: BookService, public dialog: MatDialog, private router: Router) { }
  currentRouter = this.router.url;

  ngOnInit() {

    // tslint:disable-next-line: only-arrow-functions
    this.dataSource.filterPredicate = function(data, filter: string): boolean {
      return data.title.toLowerCase().includes(filter)
      || data.author.toLowerCase().includes(filter) || data.category.toLowerCase().includes(filter);
    };

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  getBooks() {

    return this.bookService.getAllBooks();

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

  checkboxLabel(row?: Book): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }


  deleteRowData(book: Book) {
    this.bookService.deleteRow(book);
    this.reloadComponent();
  }

  reloadComponent() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/']);
}

  deleteSelected() {
    this.selection.selected.forEach(item => {
      this.deleteRowData(item);
    });

  }
  updateRow(book:Book){

    this.bookService.updateCategory(this.saveCategory,book);
  }

  updateCategory() {
    this.selection.selected.forEach(item => {
      this.updateRow(item);
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

openCategoryModal() {

  const dialogData = new ChangeCategoryDialogModel('');

  const dialogRef = this.dialog.open(ChangeCategoryModalComponent, {
    maxWidth: '400px',
    data: dialogData

  });



  dialogRef.afterClosed().subscribe(
      val => {
        if (val) {
          this.saveCategory = val.category;
          this.updateCategory();

        }

      }

  );

}


}



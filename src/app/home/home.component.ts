import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort } from '@angular/material/sort';
import { Book } from '../models/book';
import { BookService } from '../service/book.service';
import { ConfirmationDialogModel, ConfirmationDialogComponent } from '../shared/confirmation-dialog/confirmation-dialog.component';
import { ChangeCategoryDialogModel, ChangeCategoryModalComponent } from '../shared/change-category-modal/change-category-modal.component';
import { MatDialog,MatDialogConfig } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 
  displayedColumns: string[] = ['select', 'id', 'title', 'description', 'author', 'category', 'actions'];
  dataSource = new MatTableDataSource(this.getBooks());
  selection = new SelectionModel<Book>(true, []);
  result: string = '';

  

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private bookService: BookService,public dialog: MatDialog,private router: Router) { }
  currentRouter = this.router.url;
  ngOnInit() {


    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    
    
  }

  getBooks(){
    console.log(this.bookService.getAllBooks());
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


  deleteRowData(book:Book) {
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
      //let index: number = this.dataSource.data.findIndex(d => d === item);
       console.log(item.id);
      //this.dataSource.data.splice(index, 1);
      this.deleteRowData(item);
      //this.dataSource = new MatTableDataSource(this.dataSource.data);

    });
    //this.selection = new SelectionModel<Book>(true, []);
  }

  updateSelected(value){
    this.selection.selected.forEach(item => {
      let index: number = this.dataSource.data.findIndex(d => d === item);


      //this.dataSource.data.splice(index, 1);
      this.dataSource.data[index].category = value;

      this.dataSource = new MatTableDataSource(this.dataSource.data);

    });
    this.selection = new SelectionModel<Book>(true, []);
  }

  confirmDialog(): void {
    const message = `Are you sure you want to delete?`;

    const dialogData = new ConfirmationDialogModel("Confirm Delete", message);

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    
    dialogRef.afterClosed().subscribe(dialogResult => {

      if(dialogResult){
        this.deleteSelected();
      }
    });
  }

openCategoryModal(){

  const dialogData = new ChangeCategoryDialogModel("");

  const dialogRef = this.dialog.open(ChangeCategoryModalComponent, {
    maxWidth: "400px",
    data: dialogData
    
  });

 console.log(dialogRef);

  dialogRef.afterClosed().subscribe(
      val =>{
        if(val){
          this.updateSelected(val.category);
        }
        
       
      }
     
  );
  
}

    
}



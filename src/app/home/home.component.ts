import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {SelectionModel} from '@angular/cdk/collections';
import {MatSort} from '@angular/material/sort';


export interface Book {
  id:number;
  title: string;
  description: string;
  author: string;
  category: string;

}

const BOOK_DATA: Book[] = [
  {id:1,title: 'Titull1', description: 'Hydrogen', author: 'a1', category: 'H'},
  {id:2,title: 'Titull1', description: 'Helium', author: 'a2', category: 'He'},
  {id:3,title: 'Titull1', description: 'Lithium', author: 'a3', category: 'Li'},
  {id:4,title: 'Titull1', description: 'Beryllium', author: 'a4', category: 'Be'},
  {id:5,title: 'Titull1', description: 'Boron', author: 'a5', category: 'B'},
  {id:6,title: 'Titull1', description: 'Boron', author: 'a5', category: 'B'}


];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['select','id','title', 'description', 'author', 'category','actions'];
    dataSource = new MatTableDataSource(BOOK_DATA);
    selection = new SelectionModel<Book>(true,[]);

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;

    ngOnInit(){
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;


    }

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
      if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
    }

    isAllSelected(){
      const numSelected = this.selection.selected.length;
      const numRows = this.dataSource.data.length;
      return numSelected === numRows;
    }

   masterToggle(){
     this.isAllSelected()?
     this.selection.clear() :
     this.dataSource.data.forEach(row=>this.selection.select(row));
   }

   checkboxLabel(row?: Book): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }


  deleteRowData(elm){
      this.dataSource.data = this.dataSource.data.filter(i => i !== elm)
    }

    deleteSelected(){
      this.selection.selected.forEach(item => {
   let index: number = this.dataSource.data.findIndex(d => d === item);
    console.log(index);
   console.log("test");
   this.dataSource.data.splice(index,1);





   this.dataSource = new MatTableDataSource(this.dataSource.data);

 });
 this.selection = new SelectionModel<Book>(true, []);
    }




}

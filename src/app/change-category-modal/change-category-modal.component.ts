import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import { Book } from '../models/book';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-change-category-modal',
  templateUrl: './change-category-modal.component.html',
  styleUrls: ['./change-category-modal.component.scss']
})
export class ChangeCategoryModalComponent implements OnInit {
  form: FormGroup;
  category:string;
 
  constructor( private fb: FormBuilder,
    private bookService:BookService,
    private dialogRef: MatDialogRef<ChangeCategoryModalComponent>,
    @Inject(MAT_DIALOG_DATA) {category}:Book ) {

      this.category = category;
      this.form = fb.group({
        category: [category, Validators.required],
        
    });
   
     }



  ngOnInit() {
  }

  save(): void {
    // Close the dialog, return true
    this.dialogRef.close(this.form.value);
  }

  close(): void {
    // Close the dialog, return false
    this.dialogRef.close();
  }
  getCategoryList(){
  return this.bookService.getCategory();
  }

}



export class ChangeCategoryDialogModel {

  constructor(public category: string) {
  }
}
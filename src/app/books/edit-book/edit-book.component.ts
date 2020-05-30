import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { BookService } from '../../service/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book';



@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {
  book: Book;
  createEditForm: FormGroup;
 
  constructor(
    private fb: FormBuilder,
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      if (param) {
        this.book = this.bookService.getBook(param.id);
        this.editForm();
      }
    });
    
  }

  editForm(){
    this.createEditForm = this.fb.group({
      id:[this.book.id],
      title:[this.book.title,Validators.required],
      description:[this.book.description,Validators.required],
      author:[this.book.author,Validators.required],
      category:[this.book.category,Validators.required],
      date:[this.book.date,Validators.required],
    });

  }

  resetFields(){
    this.createEditForm = this.fb.group({
      id:[this.book.id],
      title:[this.book.title,Validators.required],
      description:[this.book.description,Validators.required],
      author:[this.book.author,Validators.required],
      category:[this.book.category,Validators.required],
      date:[this.book.date,Validators.required]
    });
  }


  onSubmit(){

    if(this.createEditForm.valid){
     
      this.bookService.bookEdit(this.createEditForm.value);

      this.router.navigateByUrl("/");
   }
  

  }
  getCategoryList(){
    return this.bookService.getCategory();
  }

}

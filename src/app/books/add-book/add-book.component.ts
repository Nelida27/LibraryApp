import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { BookService } from '../../service/book.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  addBookForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.addBookForm = this.fb.group({
      id: [''],
      title: ['', Validators.required],
      description: ['', Validators.required],
      author: ['', Validators.required],
      category: ['', Validators.required],
      date: ['', Validators.required],
    });
  }

  checkError = (controlName: string, errorName: string) => {
    return this.addBookForm.controls[controlName].hasError(errorName);
  }

  resetFields() {

    this.addBookForm = this.fb.group({
      id: [''],
      title: ['', Validators.required],
      description: ['', Validators.required],
      author: ['', Validators.required],
      category: ['', Validators.required],
      date: ['', Validators.required],
    });
  }



  onSubmit() {

    if (this.addBookForm.valid) {
      this.bookService.addBook(this.addBookForm.value);
      this.resetFields();
      this.router.navigateByUrl('/');
    }


  }
  getCategoryList() {
    return this.bookService.getCategory();
  }
}

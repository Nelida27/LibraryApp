import { Injectable } from '@angular/core';
import { Book } from '../models/book';



@Injectable({
  providedIn: 'root'
})
export class BookService {

  bookCounter: number = 0;
  bookNr;
  categoryList: string[] = ['Classic', 'Drama', 'Fairy Tale', 'Fable', 'Math', 'Fantasy', 'Biography'];
  idCounter;
  bookData: Book[];

  constructor() {
    this.getAllBooks();
   }

  getAllBooks(): Book[] {

    if (localStorage.getItem('books') === null) {
      this.bookData = [];
    } else {
      this.bookData = JSON.parse(localStorage.getItem('books'));
    }
    return this.bookData;
  }


  addBook(book: Book) {

    this.idCounter = localStorage.getItem('bookcounter') || 1;
    book.id = this.idCounter++;
    localStorage.setItem('bookcounter', JSON.stringify(this.idCounter));
    // book.id = this.bookData.length + 1;
    let bookData = [];
    if (localStorage.getItem('books') === null) {
      bookData = [];
      bookData.push(book);
      localStorage.setItem('books', JSON.stringify(bookData));
    } else {
      bookData = JSON.parse(localStorage.getItem('books'));
      bookData.push(book);
      localStorage.setItem('books', JSON.stringify(bookData));
    }

  }

  getBook(id) {
    let book: Book;
    this.bookData.map(val => {
      if (val.id == id) book = val;
    });
    return book;

  }

  bookEdit(book: Book) {

    this.bookData = JSON.parse(localStorage.getItem('books'));
    this.bookData.map((val, index) => {
      if (val.id == book.id) { this.bookData[index] = book; }
    });
    localStorage.setItem('books', JSON.stringify(this.bookData));

  }

  deleteRow(book: Book) {

    JSON.parse(localStorage.getItem('books'));
    const index = this.bookData.indexOf(book);
    this.bookData.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(this.bookData));

  }

  getCategory() {
    return this.categoryList;

  }

}





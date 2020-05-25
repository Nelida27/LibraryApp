import { Book } from '../models/book';

export class Init {
    load() {
      if(localStorage.getItem('books') === null || localStorage.getItem('books') == undefined) {
      
     let   bookData: Book[] = [
            { id: 1, title: 'Titull1', description: 'Hydrogen', author: 'a1', category: 'H', date: null },
            { id: 2, title: 'Titull1', description: 'Helium', author: 'a2', category: 'He', date: null },
            { id: 3, title: 'Titull1', description: 'Lithium', author: 'a3', category: 'Li', date: null },
        
          ];
        
  
        localStorage.setItem('books', JSON.stringify(bookData));
        return 
      } else {
        console.log('Found books...');
      }
    }
  }
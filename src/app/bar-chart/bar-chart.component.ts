import { Component,OnInit, ɵConsole } from '@angular/core';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { BookService } from '../service/book.service';



@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  counter=0;
  barChartX:string[]=[];
  barChartY:number[]=[];
  allBooks:any[]=[];
  bookCounter=0;
  
  chartReady = true;
  constructor(private bookService:BookService) { }

  ngOnInit() {
   
    
    this.getCategoryList();
    this.getBooks();
    this.getNumBooks();

   
   
  }

  barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
  };
  barChartLabels: Label[] = this.barChartX;
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: this.barChartY, label: 'Num of Books' }
  ];

  

  getCategoryList(){
    this.bookService.getCategory().forEach(item=>{
      this.barChartX.push(item);
    });
    return this.barChartX;
    
  }

  getBooks(){
   this.bookService.getAllBooks().map(item=>
    {
      this.allBooks.push(item.category);
    });

   console.log(this.allBooks);
    
  }
 
  getNumBooks(){
  this.barChartX.forEach(item=>{
    console.log(item);
    for(let i=0;i<this.allBooks.length;i++){
      if(this.allBooks[i]==item){
        this.counter++;
      }
  

    }
    this.barChartY.push(this.counter);
    this.counter=0;
  });
  console.log(this.barChartY);
  }

  


 

}

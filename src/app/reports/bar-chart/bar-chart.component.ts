import { Component, OnInit, ɵConsole } from '@angular/core';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { BookService } from '../../service/book.service';



@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})

export class BarChartComponent implements OnInit {
  barChartX: string[] = [];
  barChartY: number[] = [];
  allBooks: any[] = [];
  bookCounter = 0;
  chartReady = true;
  constructor(private bookService: BookService) { }

  ngOnInit() {


    this.getCategoryList();
    this.getBooks();
    this.getNumBooks();



  }

  barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{}],
      yAxes: [{
        display: true,
        ticks: {
          min: 0,
          stepSize: 1
        },
      }]
    },

  };
  barChartLabels: Label[] = this.barChartX;
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartData: ChartDataSets[] = [
    { data: this.barChartY, label: 'Num of Books' }
  ];


  getCategoryList() {
    this.bookService.getCategory().forEach(item => {
      this.barChartX.push(item);
    });
    return this.barChartX;

  }

  getBooks() {
    this.bookService.getAllBooks().map(item => {
      this.allBooks.push(item.category);
    });

  }

  getNumBooks() {
    this.barChartX.forEach(item => {
      for (let i = 0; i < this.allBooks.length; i++) {
        if (this.allBooks[i] == item) {
          this.bookCounter++;
        }
      }
      this.barChartY.push(this.bookCounter);
      this.bookCounter = 0;
    });

  }

}







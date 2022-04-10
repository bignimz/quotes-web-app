import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  quotes = [
    {
      id: 1,
      title: 'Quote 1',
      description: 'Description one',
      author: 'John Doe',
      date: '10.04.2022'
    },
    {
      id: 2,
      title: 'Quote 2',
      description: 'Description one',
      author: 'John Doe',
      date: '10.04.2022'
    },
    {
      id: 3,
      title: 'Quote 3',
      description: 'Description one',
      author: 'John Doe',
      date: '10.04.2022'
    },
    {
      id: 4,
      title: 'Quote 4',
      description: 'Description one',
      author: 'John Doe',
      date: '10.04.2022'
    }
  ];
  selectedQuote: any;

  constructor() { }

  ngOnInit(): void {
  }

  showQuote(quote: any){
    this.selectedQuote = quote;
  }

}

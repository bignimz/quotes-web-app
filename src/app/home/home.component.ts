import { Component, OnInit } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;

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

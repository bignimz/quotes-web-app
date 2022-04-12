import { Component, OnInit } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}

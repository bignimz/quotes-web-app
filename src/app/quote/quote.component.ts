import { Component, OnInit } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;

  // quotes: Quotes[] = [
  //   new Quote()
  // ]

  quotes = [
    {
      id: 1,
      title: 'Quote 1',
      description: 'Description one',
      author: 'John Doe',
      name: 'Emily Short',
      date: '10.04.2022'
    },
    {
      id: 2,
      title: 'Quote 2',
      description: 'Description Two',
      author: 'John Doe',
      date: '10.04.2022',
      name: 'Tim Wang'
    },
    {
      id: 3,
      title: 'Quote 3',
      description: 'Description Three',
      author: 'John Doe',
      date: '10.04.2022',
      name: 'Peter Mosh'
    },
    {
      id: 4,
      title: 'Quote 4',
      description: 'Description Four',
      author: 'John Doe',
      name: 'Mike Epps',
      date: '10.04.2022'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

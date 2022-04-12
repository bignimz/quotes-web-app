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

  // quotes = [
  //   {
  //     id: 1,
  //     title: 'GREATEST GLORY',
  //     description: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
  //     author: 'Nelson Mandela',
  //     name: 'Emily Short',
  //     date: '10.04.2022',
  //     likes: 0,
  //     dislikes: 0
  //   },
  //   {
  //     id: 2,
  //     title: 'GETTING STARTED',
  //     description: 'The way to get started is to quit talking and begin doing.',
  //     author: 'Walt Disney',
  //     date: '05.03.2022',
  //     name: 'Tim Wang',
  //     likes: 0,
  //     dislikes: 0

  //   },
  //   {
  //     id: 3,
  //     title: 'MIND THE TIME',
  //     description: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
  //     author: 'Steve Jobs',
  //     date: '10.04.2022',
  //     name: 'Peter Mosh',
  //     likes: 0,
  //     dislikes: 0
  //   },
  //   {
  //     id: 4,
  //     title: 'THIS LIFE',
  //     description: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
  //     author: 'Oprah Winfrey',
  //     name: 'Mike Epps',
  //     date: '10.04.2022',
  //     likes: 0,
  //     dislikes: 0
  //   }
  // ];

  quotes:Quote[] = [
    new Quote(1, 'Peter Mosh', "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.", "Steve Jobs", new Date(2022,4,24)),
    new Quote(2,'Tim Wang','The way to get started is to quit talking and begin doing',"Walt Disney", new Date(2022,6,9)),
    new Quote(3,'Emily Short','The greatest glory in living lies not in never falling, but in rising every time we fall', "Nelson Mandela", new Date(2022,4,12)),
  ];

  addNewQuote(quote: Quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength +1;
    quote.postedDate = new Date(quote.postedDate)
    this.quotes.push(quote);
  }

  toggleDetails(index: number){
    this.quotes[index].showQuote = !this.quotes[index].showQuote;
  }

  deleteQuote(isComplete: boolean, index: number){
    if(isComplete){
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if(toDelete){
        this.quotes.splice(index, 1)
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}

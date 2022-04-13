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

  quotes:Quote[] = [
    new Quote(1, 'Peter Mosh', "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.", "Steve Jobs", 0, 0, new Date(2022,4,24)),
    new Quote(2,'Tim Wang','The way to get started is to quit talking and begin doing',"Walt Disney", 0, 0, new Date(2022,6,9)),
    new Quote(3,'Emily Short','The greatest glory in living lies not in never falling, but in rising every time we fall', "Nelson Mandela", 0, 0, new Date(2022,4,12)),
  ];

  addNewQuote(quote: Quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength +1;
    quote.postedDate = new Date(quote.postedDate)
    this.quotes.push(quote);
  }

  showQuote(index: number){
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

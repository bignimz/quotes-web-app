import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuote = new Quote(0, "", "", "", new Date() );

  @Output() submitQuote = new EventEmitter<Quote>();

  addQuote(){
    this.submitQuote.emit(this.newQuote);
  }
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;

  @Input() quote!: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  // likes!: number;

  deleteQuote(complete:boolean){
    this.isComplete.emit(complete)
  }

  upVote(){
    this.quote.like += 1;
  }

  downVote(){
    this.quote.dislike += 1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

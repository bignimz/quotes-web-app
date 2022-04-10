import { Component } from '@angular/core';

import { Quote } from './quote'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quote-app';

  links = [
    { path: '/home', title: 'Home'},
    { path: '/quotes', title: 'Quotes'}
  ];

}

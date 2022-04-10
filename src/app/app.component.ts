import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quote-app';
  links = [
    { path: '/home', icon: 'home', title: 'Home'},
    { path: '/create', icon: 'create_quote', title: 'Create Quote'}
  ];
}

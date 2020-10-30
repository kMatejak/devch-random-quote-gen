import { Component, OnInit } from '@angular/core';

import { Quote } from '../quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'quote-generator';

  quote: Quote

  constructor(
    // private quoteService: quoteService,
  ) {}

  ngOnInit(): void {
  }
}

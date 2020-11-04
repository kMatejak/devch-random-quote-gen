import { Component, OnInit } from '@angular/core';

import { QuoteService } from './quote.service';
import { Quote } from '../shared/models/quote.model';
import { QuoteData } from '../shared/models/quote-data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  quote: Quote;

  constructor(private quoteService: QuoteService) {}

  getQuote() {
    this.quoteService.getQuote().subscribe((data: Quote) => {
      this.quote = data;
    });
  }

  ngOnInit(): void {
    this.getQuote();
  }
}

import { Component, OnInit } from '@angular/core';

import { QuoteService } from './quote.service';
import { Quote } from '../shared/models/quote.model';
import { QuotesData } from '../shared/models/quote-data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  quote: Quote;
  quotes: any; 

  constructor(private quoteService: QuoteService) {}

  getQuote() {
    this.quotes = null;
    this.quoteService.getQuote().subscribe((data: Quote) => {
      this.quote = data;
    });
  }

  getBillGatesQuotes() {
    this.quote = null;
    this.quoteService.getBillGatesQuotes().subscribe((data: QuotesData) => {
      this.quotes = data.quotes;
    });
  }

  ngOnInit(): void {
    this.getQuote();
  }
}

import { Component, OnInit } from '@angular/core';

import { QuoteService } from './quote.service';
import { Quote } from '../shared/models/quote.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  quote: Quote;
  quotes: Quote[];
  quoteAuthor: string;

  constructor(private quoteService: QuoteService) {}

  getQuote() {
    this.quotes = null;
    this.quoteService.getQuote().subscribe((data: Quote) => {
      this.quote = data;
    });
  }

  getQuotesByAuthor(author: string) {
    this.quoteService.getQuotesByAuthor(author).subscribe((quotes: Quote[]) => {
      this.quotes = quotes;
      this.quoteAuthor = this.quote.author;
      this.quote = null;
    });
  }

  ngOnInit(): void {
    this.getQuote();
  }
}

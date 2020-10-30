import { Component, OnInit } from '@angular/core';

import { Quote } from '../quote';
import { QuoteService } from './quote.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'quote-generator';
  // public quote: Quote[];
  public quote: string;

  constructor(
    private quoteService: QuoteService,
  ) {}

  ngOnInit(): void {
    this.quoteService.getQuote().subscribe(res => {
      this.quote = JSON.stringify(res.quote);
    });
  }
}

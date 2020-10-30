import { Component, OnInit } from '@angular/core';

import { QuoteData } from '../quote';
import { QuoteService } from './quote.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public title = 'Random Quote Generator';
  public quote: QuoteData['quote'];
  public text: string;
  public author: string;
  public genre: string;

  constructor(private quoteService: QuoteService) {}

  ngOnInit(): void {
    this.quoteService.getQuote().subscribe((data: QuoteData) => {
      this.quote = data.quote;
      this.text = this.quote.quoteText;
      this.author = this.quote.quoteAuthor;
      this.genre = this.quote.quoteGenre;
    });
  }
}

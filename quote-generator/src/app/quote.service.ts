import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { QuoteData, QuotesData } from '../shared/models/quote-data.model';
import { Quote } from '../shared/models/quote.model';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  // URLs to web api
  private randomQuoteUrl = 'https://quote-garden.herokuapp.com/api/v2/quotes/random';
  private billGatesQuotesUrl = 'https://quote-garden.herokuapp.com/api/v2/authors/Bill%20Gates?page=1&limit=10'; 

  constructor(private http: HttpClient) {}

  // GET quote data from the server
  getQuote(): Observable<Quote> {
    return this.http.get<QuoteData>(this.randomQuoteUrl).pipe(
      map((quoteData) => {
        const { quote } = quoteData;
        return {
          text: quote.quoteText,
          author: quote.quoteAuthor,
          genre: quote.quoteGenre,
        };
      })
    );
  }

  // GET quote list by author (max 10)
  getBillGatesQuotes(): Observable<QuotesData> {
    return this.http.get<QuotesData>(this.billGatesQuotesUrl);
  }





}

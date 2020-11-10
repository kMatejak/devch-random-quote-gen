import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { QuoteData } from '../shared/models/quote-data.model';
import { QuotesData } from '../shared/models/quotes-data.model';
import { Quote } from '../shared/models/quote.model';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  // URL fragments to web api
  private randomQuoteUrl = 'quotes/random';
  private authorQuotesUrl = 'authors';

  constructor(private http: HttpClient) {}

  // GET quote data from the server
  getQuote(): Observable<Quote> {
    return this.http
      .get<QuoteData>(`${environment.apiUrl}/${this.randomQuoteUrl}`)
      .pipe(
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
  getQuotesByAuthor(author: string): Observable<Quote[]> {
    return this.http
      .get<QuotesData>(
        `${environment.apiUrl}/${this.authorQuotesUrl}/${author}?page=1&limit=10`
      )
      .pipe(
        map((quotesData) => {
          const { quotes } = quotesData;
          return quotes.map((quote) => {
            return {
              text: quote.quoteText,
              author: quote.quoteAuthor,
              genre: quote.quoteGenre,
            };
          });
        })
      );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { QuotesData } from '../shared/models/quotes-data.model';
import { Quote } from '../shared/models/quote.model';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  quote$ = new BehaviorSubject<Quote>(null);

  constructor(private http: HttpClient) {}

  randomizeQuote(): void {
    this.http
      .get<QuotesData>(`${environment.apiUrl}/quotes/random`)
      .pipe(
        map((quotesData) => {
          const { data } = quotesData;
          return data.map((quote) => {
            return {
              text: quote.quoteText,
              author: quote.quoteAuthor,
              genre: quote.quoteGenre,
            };
          });
        })
      )
      .subscribe((quotes) => this.quote$.next(quotes[0]));  // it always comes with a single-element array 
  }

  getQuotesByAuthor(author: string): Observable<Quote[]> {
    return this.http
      .get<QuotesData>(
        `${environment.apiUrl}/quotes?author=${author}&limit=10`
      )
      .pipe(
        map((quotesData) => {
          const { data } = quotesData;
          return data.map((quote) => {
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

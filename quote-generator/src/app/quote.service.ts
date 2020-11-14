import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { QuoteData } from '../shared/models/quote-data.model';
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
      .get<QuoteData>(`${environment.apiUrl}/quotes/random`)
      .pipe(
        map((quoteData) => {
          const { quote } = quoteData;
          return {
            text: quote.quoteText,
            author: quote.quoteAuthor,
            genre: quote.quoteGenre,
          };
        })
      )
      .subscribe((quote) => this.quote$.next(quote));
  }

  getQuotesByAuthor(author: string): Observable<Quote[]> {
    return this.http
      .get<QuotesData>(
        `${environment.apiUrl}/authors/${author}?page=1&limit=10`
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

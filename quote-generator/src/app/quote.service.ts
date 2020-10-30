import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { QuoteData } from '../quote';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  private randomQuoteUrl = 'https://quote-garden.herokuapp.com/api/v2/quotes/random';  // URL to web api

  constructor(
    private http: HttpClient,
  ) {}

  /** GET quote data from the server */
  public getQuote(): Observable<QuoteData> {
    return this.http.get<QuoteData>(this.randomQuoteUrl);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { TakenQuoteData } from '../quote';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  private randomQuoteUrl = 'https://quote-garden.herokuapp.com/api/v2/quotes/random';  // URL to web api

  constructor(
    private http: HttpClient,
  ) {}

  /** GET quote from the server */
  public getQuote(): Observable<TakenQuoteData> {
    return this.http.get<TakenQuoteData>(this.randomQuoteUrl);
  }
}

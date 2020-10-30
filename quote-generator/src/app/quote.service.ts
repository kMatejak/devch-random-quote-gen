import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Quote } from '../quote';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  private randomQuoteUrl = 'https://quote-garden.herokuapp.com/api/v2/quotes/random';  // URL to web api

  constructor(
    private http: HttpClient,
  ) {}

  /** GET quote from the server */
  // public getQuote(): Observable<Quote[]> {
  //   return this.http.get<Quote[]>(this.randomQuoteUrl);
  // }
  public getQuote(): Observable<any> {
    return this.http.get(this.randomQuoteUrl);
  }
}

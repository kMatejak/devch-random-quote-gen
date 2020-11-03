import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { QuoteData } from '../shared/models/quote-data.model';

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
    // TODO 
    //
    // - jak takiej odpowiedzi z api 
    // statusCode: number;
    // quote: {
    //   _id: string;
    //   quoteText: string;
    //   quoteAuthor: string;
    //   quoteGenre: string;
    // };
    //
    // zmapować na taką jak poniżej
    // quote: {
    //   text: string;
    //   author: string;
    //   genre: string;
    // };
    return this.http.get<QuoteData>(this.randomQuoteUrl);
  }
}

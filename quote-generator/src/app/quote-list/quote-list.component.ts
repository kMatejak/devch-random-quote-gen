import { Component, OnInit } from '@angular/core';

import { Quote } from '../../shared/models/quote.model';
import { ActivatedRoute } from '@angular/router';
import { QuoteService } from '../quote.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['../app.component.css', './quote-list.component.css'],
})
export class QuoteListComponent implements OnInit {

  quotes$: Observable<Quote[]>;
  quoteAuthor: string;

  constructor(private route: ActivatedRoute,
              private quoteService: QuoteService,
              ) {
  }

  ngOnInit(): void {
    this.route.params
      .subscribe(params => {
      this.quoteAuthor = params.author;
      this.quotes$ = this.quoteService.getQuotesByAuthor(this.quoteAuthor);
    });
  }
}

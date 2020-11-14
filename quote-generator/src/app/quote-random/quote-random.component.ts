import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';

import { Quote } from '../../shared/models/quote.model';
import { QuoteService } from '../quote.service';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'quote-random',
  templateUrl: './quote-random.component.html',
  styleUrls: ['../app.component.css', './quote-random.component.css'],
})
export class QuoteRandomComponent implements OnInit, OnDestroy {
  
  quote: Quote;
  destroy$ = new EventEmitter<boolean>();

  constructor(
    public quoteService: QuoteService, 
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.quoteService.quote$
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: Quote) => {
        this.quote = data;
        if (!data) {
          this.quoteService.randomizeQuote();
        }
      });
  }

  getQuotesByAuthor(): void {
    this.router.navigate(['list', this.quote.author]);
  }

  ngOnDestroy(): void {
    this.destroy$.emit(true);
  }
}

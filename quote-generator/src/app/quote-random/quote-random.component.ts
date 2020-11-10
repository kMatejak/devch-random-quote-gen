import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Quote } from '../../shared/models/quote.model';

@Component({
  selector: 'quote-random',
  templateUrl: './quote-random.component.html',
  styleUrls: ['../app.component.css', './quote-random.component.css'],
})
export class QuoteRandomComponent {
  @Input() quote: Quote;
  @Output() getQuotesByAuthorEvent = new EventEmitter<string>();

  getQuotesByAuthor() {
    this.getQuotesByAuthorEvent.emit(this.quote.author);
  }
}

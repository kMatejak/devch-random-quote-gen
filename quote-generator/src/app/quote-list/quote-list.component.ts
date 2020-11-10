import { Component, OnInit, Input } from '@angular/core';

import { Quote } from '../../shared/models/quote.model';

@Component({
  selector: 'quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['../app.component.css', './quote-list.component.css'],
})
export class QuoteListComponent implements OnInit {
  @Input() quotes: Quote[];
  @Input() quoteAuthor: string;

  ngOnInit(): void {}
}

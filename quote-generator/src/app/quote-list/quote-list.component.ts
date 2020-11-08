import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css'],
})
export class QuoteListComponent implements OnInit {
  @Input() quotes: any;
  @Input() quoteAuthor: string;

  ngOnInit(): void {
  }
}

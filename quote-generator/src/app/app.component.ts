import { Component } from '@angular/core';
import { QuoteService } from './quote.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(public quoteService: QuoteService,
              private router: Router,
              ) {}

  randomizeQuote(): void {
    this.router.navigate(['../']);
  }
}

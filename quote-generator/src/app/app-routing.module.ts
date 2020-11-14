import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuoteRandomComponent } from './quote-random/quote-random.component';
import { QuoteListComponent } from './quote-list/quote-list.component';

const routes: Routes = [
  {
    path: '',
    component: QuoteRandomComponent,
  },
  {
    path: 'list/:author',
    component: QuoteListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

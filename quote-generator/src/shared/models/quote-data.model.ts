import { Quote } from './quote.model';

export interface QuoteData {
  statusCode: number;
  quote: QuoteRes;
}

export interface QuotesData {
  statusCode: number;
  message: string;
  totalPages: number;
  currentPage: number;
  quotes: Quote[];
}


export interface QuoteRes {
  quoteText: string;
  quoteAuthor: string;
  quoteGenre: string;
}

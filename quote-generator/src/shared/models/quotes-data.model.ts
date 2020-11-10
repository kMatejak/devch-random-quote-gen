import { Quote } from './quote.model';

export interface QuotesData {
  statusCode: number;
  message: string;
  totalPages: number;
  currentPage: number;
  quotes: Quote[];
}

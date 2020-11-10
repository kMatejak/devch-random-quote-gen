import { QuoteRes } from './quote-res.model';

export interface QuotesData {
  statusCode: number;
  message: string;
  totalPages: number;
  currentPage: number;
  quotes: QuoteRes[];
}

import { QuoteRes } from './quote-res.model';

export interface QuotesData {
  statusCode: number;
  message: string;
  pagination: {
    currentPage: number,
    nextPage: number,
    totalPages: number,
  };
  totalQuotes: number;
  data: QuoteRes[];
}

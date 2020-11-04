export interface QuoteData {
  statusCode: number;
  quote: {
    quoteText: string;
    quoteAuthor: string;
    quoteGenre: string;
  };
}

export interface QuotesData {
  statusCode: number;
  message: string;
  totalPages: number;
  currentPage: number;
  quotes: QuoteData['quote'][];
}

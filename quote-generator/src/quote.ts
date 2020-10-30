export interface TakenQuoteData {
  statusCode: number;
  quote: {
    _id: string;
    quoteText: string;
    quoteAuthor: string;
    quoteGenre: string;
  };
}

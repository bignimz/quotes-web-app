export class Quote {
      showQuote: boolean;
  completeQuote: Date;
  completeDate: string | number | Date;
      constructor(
            public id: number, 
            public name: string, 
            public quote: string,
            public author: string,
            public postedDate: Date
            ) {
            this.showQuote = false;
      }
}

export class Quote {
      showQuote: boolean;
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

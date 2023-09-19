export interface IExpense {
    date: Date;
    categoryName: string;
    amount: number;
    invoiceNumber?: number;
    notes?: string;
    id?: string;
  }
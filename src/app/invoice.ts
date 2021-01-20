// Declare what an invoice is

export interface Invoice {

  id: string;
  title: string;
  amount: number;
  // date: string;
  creatorId: number;
  debtor: string;
  state: string;

}

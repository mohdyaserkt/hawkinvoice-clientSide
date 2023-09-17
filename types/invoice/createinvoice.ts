export interface IItem {
  quantity: number;
  rate: number;
  itemName: string;
  id: string;
  [key: string]: string | number;
  // Add an index signature for dynamic keys
}
adjustment: "";
adjustmentValue: "0";
customerId: "650423b1f0b7234969047c75";
customerName: "my dispal";
discount: "5";
discountType: "price";
dueDate: "2023-09-24";
invoiceDate: "2023-09-17";
invoiceNumber: "78";
itemName: "new item54";
orderNumber: "124";
paymentMode: "onlinePayment";
quantity: "1.00";
rate: "545.00";
recievedPayment: "on";
salesPerson: "njd";
subject: "subject";
export interface IInvoice {
  id?: string;
  customerName: string;
  customerEmail: string;
  invoiceNumber: string;
  customerId: string;
  orderNumber?: string;
  invoiceDate: Date;
  dueDate: Date;
  salesPerson?: string;
  subject?: string;
  itemDetails: any[]; // You can define a more specific type for itemDetails
  subTotal: number;
  discount?: number;
  Adjustment?: object;
  Total: number;
  customerNotes?: string;
  termsAndConditions?: string;
  status?: string;
  paymentMode?: string;
}

export interface handleCreateInvoice {
  invoice: {
    id?: string;
    customerName: string;
    customerEmail: string;
    invoiceNumber: string;
    customerId: string;
    orderNumber?: string;
    invoiceDate: Date;
    dueDate: Date;
    salesPerson?: string;
    subject?: string;
    itemDetails: any[]; // You can define a more specific type for itemDetails
    subTotal: number;
    discount?: number;
    Adjustment?: object;
    Total: number;
    customerNotes?: string;
    termsAndConditions?: string;
    status?: string;
    paymentMode?: string;
  };

  setError?: (field: string, errors: string[]) => void;
}

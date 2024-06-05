import { PaymentMethod, PaymentFinalization, Location } from './commonTypes';

export type Session = {
  id: string;
  clientId: string;
  productId: string;
  name: string;
  date: Date;
  time: string;

  durationMinutes: number;
  price: string;
  paymentFinalization: PaymentFinalization;

  discount: string;
  paymentMethod: PaymentMethod;
  location: Location;
  generateInvoice: boolean;
};

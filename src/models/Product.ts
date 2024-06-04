import { PaymentFinalization } from './commonTypes';

export type Product = {
  id: string;
  name: string;
  durationMinutes: number;
  price: string;
  paymentFinalization: PaymentFinalization;
};

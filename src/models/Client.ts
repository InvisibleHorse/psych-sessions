import { PaymentMethod, Location } from './commonTypes';

export type Client = {
  id: string;
  name: string;
  discount: string;
  paymentMethodPreference: PaymentMethod;
  locationPreference: Location;
  generateInvoices: boolean;
};

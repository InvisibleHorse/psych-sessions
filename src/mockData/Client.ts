import { Client } from '../models/Client';

export const clients: Client[] = [
  {
    id: '1',
    name: 'BoJack Horseman',
    discount: '10',
    paymentMethodPreference: 'card',
    locationPreference: 'in-person',
    generateInvoices: true,
  },
  {
    id: '2',
    name: 'Diane Nguyen',
    discount: '5',
    paymentMethodPreference: 'paypal',
    locationPreference: 'online',
    generateInvoices: false,
  },
  {
    id: '3',
    name: 'Princess Carolyn',
    discount: '15',
    paymentMethodPreference: 'bank-transfer',
    locationPreference: 'in-person',
    generateInvoices: true,
  },
  {
    id: '4',
    name: 'Mr. Peanutbutter',
    discount: '20',
    paymentMethodPreference: 'card',
    locationPreference: 'online',
    generateInvoices: true,
  },
  {
    id: '5',
    name: 'Todd Chavez',
    discount: '8',
    paymentMethodPreference: 'paypal',
    locationPreference: 'in-person',
    generateInvoices: false,
  },
  {
    id: '6',
    name: 'Sarah Lynn',
    discount: '12',
    paymentMethodPreference: 'card',
    locationPreference: 'online',
    generateInvoices: true,
  },
];

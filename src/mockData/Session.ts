import { Session } from '../models/Session';

export const sessions: Session[] = [
  {
    id: '1',
    clientId: '1',
    productId: '1',
    name: 'Princess Carolyn - Group Therapy',
    date: new Date(2024, 6, 4),

    durationMinutes: 60,
    price: '50',
    paymentFinalization: 'before',

    discount: '10',
    paymentMethod: 'card',
    location: 'in-person',
    generateInvoice: true,
  },
  {
    id: '2',
    clientId: '2',
    productId: '2',
    name: 'Diane Nguyen - Coaching Session',
    date: new Date(2024, 6, 4),

    durationMinutes: 90,
    price: '75',
    paymentFinalization: 'after',

    discount: '5',
    paymentMethod: 'paypal',
    location: 'online',
    generateInvoice: false,
  },
  {
    id: '3',
    clientId: '3',
    productId: '3',
    name: 'BoJack Horseman - Classic Therapy',
    date: new Date(2024, 6, 5),

    durationMinutes: 45,
    price: '40',
    paymentFinalization: 'before',

    discount: '15',
    paymentMethod: 'bank-transfer',
    location: 'in-person',
    generateInvoice: true,
  },
  {
    id: '4',
    clientId: '4',
    productId: '4',
    name: 'Mr. Peanutbutter - Mindfulness Training',
    date: new Date(2024, 6, 5),

    durationMinutes: 30,
    price: '35',
    paymentFinalization: 'before',

    discount: '20',
    paymentMethod: 'card',
    location: 'online',
    generateInvoice: true,
  },
  {
    id: '5',
    clientId: '5',
    productId: '5',
    name: 'Sarah Lynn - Stress Management',
    date: new Date(2024, 6, 5),

    durationMinutes: 60,
    price: '60',
    paymentFinalization: 'after',

    discount: '8',
    paymentMethod: 'paypal',
    location: 'in-person',
    generateInvoice: false,
  },
  {
    id: '6',
    clientId: '6',
    productId: '6',
    name: 'Todd Chavez - Career Counseling',
    date: new Date(2024, 6, 6),

    durationMinutes: 75,
    price: '70',
    paymentFinalization: 'before',

    discount: '12',
    paymentMethod: 'card',
    location: 'online',
    generateInvoice: true,
  },
];

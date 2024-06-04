import { Product } from '../models/Product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic Therapy',
    durationMinutes: 60,
    price: '50',
    paymentFinalization: 'before',
  },
  {
    id: '2',
    name: 'Group Therapy',
    durationMinutes: 90,
    price: '75',
    paymentFinalization: 'after',
  },
  {
    id: '3',
    name: 'Coaching Session',
    durationMinutes: 45,
    price: '40',
    paymentFinalization: 'before',
  },
  {
    id: '4',
    name: 'Mindfulness Training',
    durationMinutes: 30,
    price: '35',
    paymentFinalization: 'before',
  },
  {
    id: '5',
    name: 'Career Counseling',
    durationMinutes: 60,
    price: '60',
    paymentFinalization: 'after',
  },
  {
    id: '6',
    name: 'Stress Management',
    durationMinutes: 75,
    price: '70',
    paymentFinalization: 'before',
  },
];

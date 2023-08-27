import { IUser } from '../models/user-model';

export const mockUsers: IUser[] = [
  {
    id: 1,
    username: 'johndoe',
    firstName: 'John',
    lastName: 'Doe',
    emails: ['john.doe@example.com'],
    phoneNumbers: [1234567890],
    isActive: true,
    logs: [
      { date: new Date('2023-08-01'), action: 'Login' },
      { date: new Date('2023-08-02'), action: 'Logout' },
    ],
  },
  {
    id: 2,
    username: 'janesmith',
    firstName: 'Jane',
    lastName: 'Smith',
    emails: ['jane.smith@example.com'],
    phoneNumbers: [9876543210],
    isActive: false,
    logs: [
      { date: new Date('2023-08-03'), action: 'Login' },
      { date: new Date('2023-08-04'), action: 'Logout' },
    ],
  },
  {
    id: 3,
    username: 'michaeljohnson',
    firstName: 'Michael',
    lastName: 'Johnson',
    emails: ['michael.johnson@example.com'],
    phoneNumbers: [5551234567],
    isActive: true,
    logs: [
      { date: new Date('2023-08-05'), action: 'Login' },
      { date: new Date('2023-08-06'), action: 'Logout' },
    ],
  },
];

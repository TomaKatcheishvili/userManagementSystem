import { IUser } from '../models/user-model';

export const mockUsers: IUser[] = [
  {
    username: 'johndoe',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phoneNumber: 1234567890,
    isActive: true,
    logs: [
      { date: new Date('2023-08-01'), action: 'Login' },
      { date: new Date('2023-08-02'), action: 'Logout' },
    ],
  },
  {
    username: 'janesmith',

    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    phoneNumber: 9876543210,
    isActive: false,
    logs: [
      { date: new Date('2023-08-03'), action: 'Login' },
      { date: new Date('2023-08-04'), action: 'Logout' },
    ],
  },
  {
    username: 'michaeljohnson',
    firstName: 'Michael',
    lastName: 'Johnson',
    email: 'michael.johnson@example.com',
    phoneNumber: 5551234567,
    isActive: true,
    logs: [
      { date: new Date('2023-08-05'), action: 'Login' },
      { date: new Date('2023-08-06'), action: 'Logout' },
    ],
  },
];

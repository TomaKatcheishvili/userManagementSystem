import { IUser } from '../models/user-model';

export const mockUsers: IUser[] = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phoneNumber: 1234567890,
    isActive: true,
  },
  {
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    phoneNumber: 9876543210,
    isActive: false,
  },
  {
    firstName: 'Michael',
    lastName: 'Johnson',
    email: 'michael.johnson@example.com',
    phoneNumber: 5551234567,
    isActive: true,
  },
];

import { Injectable } from '@angular/core';
import { mockUsers } from '../mock-data/users-mock-data';
import { IUser } from '../models/user-model';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  users: IUser[] = mockUsers;

  constructor() {}

  getUsers() {
    return this.users;
  }
}

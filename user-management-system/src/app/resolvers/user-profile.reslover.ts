import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { mockUsers } from '../mock-data/users-mock-data';
import { IUser } from '../models/user-model';

@Injectable({
  providedIn: 'root',
})
export class UserProfileResolver implements Resolve<IUser | null> {
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): IUser | null {
    const firstName = route.paramMap.get('firstName');
    if (firstName) {
      return mockUsers.find((user) => user.email === firstName) || null;
    }
    return null;
  }
}

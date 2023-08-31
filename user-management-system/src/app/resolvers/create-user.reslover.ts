import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { UserServiceService } from '../services/user-service.service';

@Injectable({
  providedIn: 'root',
})
export class CreateUserResolver implements Resolve<any> {
  constructor(private userService: UserServiceService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    console.log('resolver');
    const userId = route.params['userId'];
    if (userId) {
      return this.userService.getUserById(userId);
    } else {
      return of(null);
    }
  }
}

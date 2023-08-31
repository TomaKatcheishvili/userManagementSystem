import {
  Component,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import * as UserActions from '../+store/user.actions';
import { selectSuccessMessage, selectUsers } from '../+store/user.selectors';
import { IUser } from '../models/user-model';
import { UserProfileComponent } from '../user-profile/user-profile.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit, OnDestroy {
  users!: IUser[];
  selectedUser: IUser | undefined;

  successMessage$ = this.store.select(selectSuccessMessage);

  destroy$ = new Subject<void>();

  @ViewChildren(UserProfileComponent)
  userProfileComponents!: QueryList<UserProfileComponent>;

  constructor(private store: Store) {
    this.getUsers();
  }

  ngOnInit(): void {
    this.clearSuccessMessage();
  }

  navigateToUserProfile(user: IUser) {
    this.selectedUser = user;
  }

  getUsers() {
    this.store.dispatch(UserActions.loadUsers());

    this.store
      .select(selectUsers)
      .pipe(takeUntil(this.destroy$))
      .subscribe((users) => {
        this.users = users;
      });
  }

  deleteUser(userId: number) {
    this.store.dispatch(UserActions.deleteUser({ userId }));
  }

  clearSuccessMessage() {
    setTimeout(() => {
      this.store.dispatch(UserActions.clearSuccessMessage());
    }, 5000);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}

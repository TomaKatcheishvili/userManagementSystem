import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { selectUsers } from 'src/app/+store/user.selectors';
import { IUser } from 'src/app/models/user-model';
import * as UserActions from '../../+store/user.actions';
@Component({
  selector: 'app-user-logs-sidebar',
  templateUrl: './user-logs-sidebar.component.html',
  styleUrls: ['./user-logs-sidebar.component.css'],
})
export class UserLogsSidebarComponent implements OnDestroy {
  users!: IUser[];
  destroy$ = new Subject<void>();

  constructor(private store: Store) {
    this.getUsers();
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

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}

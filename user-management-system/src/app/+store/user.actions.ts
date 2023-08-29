import { createAction, props } from '@ngrx/store';
import { IUser } from '../models/user-model';

export const loadUsers = createAction('[User] Load Users');
export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<{ users: IUser[] }>()
);
export const addUser = createAction(
  '[User] Add User',
  props<{ user: IUser }>()
);
export const addUserSuccess = createAction(
  '[User] Add User Success',
  props<{ user: IUser }>()
);
export const addUserFailure = createAction(
  '[User] Add User Failure',
  props<{ error: any }>()
);

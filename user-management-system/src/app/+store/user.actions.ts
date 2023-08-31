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
export const editUser = createAction(
  '[User] Edit User',
  props<{ user: IUser; userId: number }>()
);
export const editUserSucess = createAction(
  '[User] Edit User Success',
  props<{ user: IUser; userId: number }>()
);
export const editUserFailure = createAction(
  '[User] Edit User Failure',
  props<{ error: IUser }>()
);
export const deleteUser = createAction(
  '[User] Delete User',
  props<{ userId: number }>()
);

export const deleteUserSuccess = createAction(
  '[User] Delete User Success',
  props<{ userId: number }>()
);

export const deleteUserFailure = createAction(
  '[User] Delete User Failure',
  props<{ error: any }>()
);

export const clearSuccessMessage = createAction('[User] Clear Success Message');

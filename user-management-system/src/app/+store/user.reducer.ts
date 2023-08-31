import { createReducer, on } from '@ngrx/store';
import { IUser } from '../models/user-model';
import * as UserActions from './user.actions';

export interface UserState {
  users: IUser[];
  loading: boolean;
  error: any;
  successMessage: String | null;
}

export const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
  successMessage: null,
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.loadUsersSuccess, (state, { users }) => ({ ...state, users })),
  on(UserActions.addUserSuccess, (state, { user }) => ({
    ...state,
    users: [...state.users, user],
    successMessage: 'User Added Successfully',
  })),
  on(UserActions.editUserSucess, (state, { user, userId }) => ({
    ...state,
    users: state.users.map((existingUser) =>
      existingUser.id === userId ? user : existingUser
    ),
    successMessage: 'User Edited Successfully',
  })),
  on(UserActions.deleteUserSuccess, (state, { userId }) => ({
    ...state,
    users: state.users.filter((user) => user.id !== userId),
    successMessage: 'User Deleted',
  })),
  on(UserActions.clearSuccessMessage, (state) => ({
    ...state,
    successMessage: null,
  }))
);

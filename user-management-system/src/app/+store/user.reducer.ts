import { createReducer, on } from '@ngrx/store';
import { IUser } from '../models/user-model';
import * as UserActions from './user.actions';

export interface UserState {
  users: IUser[];
  loading: boolean;
  error: any;
}

export const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.loadUsersSuccess, (state, { users }) => ({ ...state, users })),
  on(UserActions.addUserSuccess, (state, { user }) => ({
    ...state,
    users: [...state.users, user],
  }))
);

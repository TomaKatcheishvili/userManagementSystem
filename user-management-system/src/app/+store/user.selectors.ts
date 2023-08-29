import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.reducer'; // Import the correct UserState type

// Create a feature selector for the user state
const selectUserState = createFeatureSelector<UserState>('user');

// Create a selector to get the users from the user state
export const selectUsers = createSelector(
  selectUserState,
  (state: UserState) => state.users
);

import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./reducers";

// feature selector
export const selectAuthState = createFeatureSelector<AuthState>("auth");

// createSelector memoizes the result
export const isLoggedIn = createSelector(
  selectAuthState,
  (auth) => !!auth.user
);

export const isLoggedOut = createSelector(isLoggedIn, (loggedIn) => !loggedIn);

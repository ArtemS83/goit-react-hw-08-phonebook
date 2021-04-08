import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
// import {
//   registerRequest,
//   registerSuccess,
//   registerError,
//   logoutRequest,
//   logoutSuccess,
//   logoutError,
//   loginRequest,
//   loginSuccess,
//   loginError,
//   getCurrentUserRequest,
//   getCurrentUserSuccess,
//   getCurrentUserError,
// } from './auth-actions';
import authActions from './auth-actions';

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [authActions.registerSuccess]: (_, action) => action.payload.user,
  [authActions.loginSuccess]: (_, action) => action.payload.user,
  [authActions.logoutSuccess]: () => initialUserState,
  [authActions.getCurrentUserSuccess]: (_, action) => action.payload, // без user,так как приходит просто user
});

const token = createReducer(null, {
  [authActions.registerSuccess]: (_, action) => action.payload.token,
  [authActions.loginSuccess]: (_, action) => action.payload.token,
  [authActions.logoutSuccess]: () => null,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [authActions.registerError]: setError,
  [authActions.loginError]: setError,
  [authActions.logoutError]: setError,
  [authActions.getCurrentUserError]: setError,
});

export default combineReducers({
  user,
  token,
  error,
});

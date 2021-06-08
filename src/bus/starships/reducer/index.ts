import { createReducer } from '@reduxjs/toolkit';

import { starshipsActions } from 'bus/starships/actions';

import { StarshipsState } from 'bus/starships/types';

const initialState: StarshipsState = {
  data: {
    results: [],
  },
  isFetching: false,
  error: false,
};

export const starshipsReducer = createReducer(initialState, builder => {
  builder
    .addCase(starshipsActions.startFetching, state => ({
      ...state,
      isFetching: true,
      error: false,
    }))
    .addCase(starshipsActions.stopFetching, state => ({
      ...state,
      isFetching: false,
      error: false,
    }))
    .addCase(starshipsActions.setFetchingError, (state, { payload }) => ({
      ...state,
      error: payload,
    }))
    .addCase(starshipsActions.fill, (state, { payload }) => ({
      ...state,
      data: {
        ...payload,
      },
      error: false,
    }))
    .addCase(starshipsActions.fetchAsync, state => ({ ...state }));
});

import { createAction } from '@reduxjs/toolkit';

import {
  STARSHIPS_FILL,
  STARSHIPS_FETCH_ASYNC,
  STARSHIPS_STOP_FETCHING,
  STARSHIPS_START_FETCHING,
  STARSHIPS_SET_FETCHING_ERROR,
} from 'bus/starships/actions/types';

import { Starships, ErrorHttpAction } from 'bus/starships/types';

export const starshipsActions = {
  startFetching: createAction(STARSHIPS_START_FETCHING),
  stopFetching: createAction(STARSHIPS_STOP_FETCHING),
  fill: createAction<Starships>(STARSHIPS_FILL),
  setFetchingError: createAction(
    STARSHIPS_SET_FETCHING_ERROR,
    (payload: ErrorHttpAction) => ({
      error: true,
      payload,
    }),
  ),
  fetchAsync: createAction(STARSHIPS_FETCH_ASYNC),
};

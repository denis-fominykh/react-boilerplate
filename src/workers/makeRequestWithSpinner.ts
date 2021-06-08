import { SagaIterator } from '@redux-saga/core';
import { put, call } from 'redux-saga/effects';
import {
  ActionCreatorWithPayload,
  ActionCreatorWithoutPayload,
  ActionCreatorWithPreparedPayload,
} from '@reduxjs/toolkit';

import { ErrorHttpAction } from 'bus/starships/types';
import {
  STARSHIPS_STOP_FETCHING,
  STARSHIPS_START_FETCHING,
  STARSHIPS_SET_FETCHING_ERROR,
} from 'bus/starships/actions/types';

interface OptionsType<T> {
  fetcherParam?: string;
  fetcher: (url?: string) => Promise<T>;
  fill: ActionCreatorWithPayload<T, string>;
  stopFetching: ActionCreatorWithoutPayload<typeof STARSHIPS_STOP_FETCHING>;
  startFetching: ActionCreatorWithoutPayload<typeof STARSHIPS_START_FETCHING>;
  setErrorAction: ActionCreatorWithPreparedPayload<
    Parameters<
      (payload: ErrorHttpAction) => { payload: string; error: boolean }
    >,
    string,
    typeof STARSHIPS_SET_FETCHING_ERROR,
    ReturnType<
      (payload: ErrorHttpAction) => { payload: string; error: boolean }
    > extends { error: infer E }
      ? E
      : never,
    ReturnType<
      (payload: ErrorHttpAction) => { payload: string; error: boolean }
    > extends { meta: infer M }
      ? M
      : never
  >;
}

export function* makeRequestWithSpinner<T>(
  options: OptionsType<T>,
): SagaIterator {
  const {
    fetcher,
    fetcherParam,
    startFetching,
    stopFetching,
    fill,
    setErrorAction,
  } = options;

  try {
    yield put(startFetching());

    const result = yield call(fetcher, fetcherParam);
    yield put(fill(result));
  } catch (error) {
    yield put(setErrorAction(error.message));
  } finally {
    yield put(stopFetching());
  }
}

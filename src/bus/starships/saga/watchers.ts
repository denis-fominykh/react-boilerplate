import { takeEvery, all, call } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';

import { STARSHIPS_FETCH_ASYNC } from 'bus/starships/actions/types';
import { fetchStarships } from 'bus/starships/saga/workers';

export function* watchFetchStarships(): SagaIterator {
  yield takeEvery(STARSHIPS_FETCH_ASYNC, fetchStarships);
}

export function* watchStarships(): SagaIterator {
  yield all([call(watchFetchStarships)]);
}

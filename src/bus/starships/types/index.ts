import {
  STARSHIPS_FETCH_ASYNC,
  STARSHIPS_FILL,
  STARSHIPS_SET_FETCHING_ERROR,
  STARSHIPS_START_FETCHING,
  STARSHIPS_STOP_FETCHING,
} from 'bus/starships/actions/types';

export interface Starship {
  name: string;
}

export interface Starships {
  results: Starship[];
}

export type ErrorHttpAction = string;

export interface StarshipsStartFetchingAction {
  type: typeof STARSHIPS_START_FETCHING;
}

export interface StarshipsStopFetchingAction {
  type: typeof STARSHIPS_STOP_FETCHING;
}

export interface StarshipsSetFetchingErrorAction {
  error: true;
  payload: ErrorHttpAction;
  type: typeof STARSHIPS_SET_FETCHING_ERROR;
}

export interface StarshipsFetchAsyncAction {
  type: typeof STARSHIPS_FETCH_ASYNC;
}

export interface StarshipsFillAction {
  payload: Starships;
  type: typeof STARSHIPS_FILL;
}

export type StarshipsActionsTypes =
  | StarshipsFillAction
  | StarshipsFetchAsyncAction
  | StarshipsStopFetchingAction
  | StarshipsStartFetchingAction
  | StarshipsSetFetchingErrorAction;

export interface StarshipsState {
  data: Starships;
  isFetching: boolean;
  error: false | ErrorHttpAction;
}

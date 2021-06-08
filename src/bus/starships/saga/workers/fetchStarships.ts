import { Starships } from 'bus/starships/types';
import { makeRequestWithSpinner } from 'workers';
import { starshipsActions } from 'bus/starships/actions';
import { fetchStarshipsApi } from 'api/fetchStarshipsApi';

export function* fetchStarships(): Generator {
  const options = {
    fill: starshipsActions.fill,
    fetcher: fetchStarshipsApi.starships.fetch,
    stopFetching: starshipsActions.stopFetching,
    startFetching: starshipsActions.startFetching,
    setErrorAction: starshipsActions.setFetchingError,
  };

  yield makeRequestWithSpinner<Starships>(options);
}

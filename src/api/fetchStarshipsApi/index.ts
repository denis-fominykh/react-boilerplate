import { API } from 'api/config';
import { FetchDataType } from 'types';
import { Starships } from 'bus/starships/types';

interface APIStarshipsDataType {
  starships: {
    fetch: FetchDataType<Starships>;
  };
}

export const fetchStarshipsApi: APIStarshipsDataType = {
  starships: {
    fetch: (): Promise<Starships> =>
      fetch(API.STARSHIPS, {
        method: 'GET',
      })
        .then(response => response.json())
        .then(({ results }) => ({ results })),
  },
};

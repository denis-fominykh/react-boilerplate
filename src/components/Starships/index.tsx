import React, { FC, ReactElement } from 'react';

import { Title } from 'components/Title';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';

import { Starship } from 'bus/starships/types';
import { starshipsReducer } from 'bus/starships/reducer';
import { watchStarships } from 'bus/starships/saga/watchers';
import { useStarshipsFetch } from 'bus/starships/hooks/useStarshipsFetch';

export const Starships: FC = () => {
  useInjectReducer({ key: 'starships', reducer: starshipsReducer });
  useInjectSaga({ key: 'starships', saga: watchStarships });

  const { data, isFetching, error } = useStarshipsFetch();
  const errorMessage = error && <p>{error}</p>;
  const loader = isFetching && <p>Loading data from API...</p>;

  const list =
    isFetching ||
    data.results.map(
      ({ name }: Starship, index: number): ReactElement => (
        <li key={Number(index)}>{name}</li>
      ),
    );

  return (
    <>
      <Title>Starships</Title>
      {errorMessage}
      {loader}
      {list}
    </>
  );
};

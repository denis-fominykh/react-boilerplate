import * as React from 'react';
import { Helmet } from 'react-helmet-async';

import { Starships } from 'components/Starships';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Start Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <span>HomePage container</span>
      <Starships />
    </>
  );
}

import React from 'react';
import {MainPage} from '../MainPage';
import {ApolloProvider, getDataFromTree} from 'react-apollo';
import {client} from '../../apollo/client';

it('renders without crashing', async () => {
  await getDataFromTree(
    <ApolloProvider client={client}>
      <MainPage />
    </ApolloProvider>
  );

  expect(client.extract()).toMatchSnapshot();
  return;
});

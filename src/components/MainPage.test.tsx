import React from 'react';
import ReactDOM from 'react-dom';
import {MainPage} from './MainPage';
import {ApolloProvider, getDataFromTree} from 'react-apollo';
import {client} from '../apollo/client';

it('renders without crashing', async () => {
  // const div = document.createElement('div');
  // ReactDOM.render(
  //   <ApolloProvider client={client}>
  //     <MainPage />
  //   </ApolloProvider>,
  //   div
  // );
  // ReactDOM.unmountComponentAtNode(div);
  await getDataFromTree(
    <ApolloProvider client={client}>
      <MainPage />
    </ApolloProvider>
  );

  expect(client.extract()).toMatchSnapshot();
  return;
});

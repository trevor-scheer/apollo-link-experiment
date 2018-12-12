import ApolloClient from 'apollo-client';

import {InMemoryCache} from 'apollo-cache-inmemory';
import {createHttpLink} from 'apollo-link-http';
import {ApolloLink, from, Observable} from 'apollo-link';
import {fstat, existsSync, writeFileSync} from 'fs';
import {resolve} from 'path';

const cache = new InMemoryCache();

const readWriteLink = new ApolloLink((operation, forward) => {
  const fileName = resolve(__dirname, `${operation.operationName}.json`);

  if (existsSync(fileName)) {
    const data = require(fileName);
    return new Observable(observer => {
      console.log('returning JSON');
      observer.next(data);
      observer.complete();
    });
  }
  console.log('returning network request, writing file');

  return forward!(operation).map(data => {
    if (!existsSync(fileName)) {
      writeFileSync(
        resolve(__dirname, `${operation.operationName}.json`),
        JSON.stringify(data)
      );
    }

    return data;
  });
});

const httpLink = createHttpLink({
  uri: 'https://graphql-demo-v2.now.sh/'
});

const link = from([readWriteLink, httpLink]);

export const client = new ApolloClient({
  link,
  cache
});

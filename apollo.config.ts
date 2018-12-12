import {ConfigBaseFormat} from 'apollo-language-server';

const config: ConfigBaseFormat = {
  client: {
    name: 'mocking-test',
    service: {
      name: 'mocking-test',
      url: 'https://graphql-demo-v2.now.sh/'
    },
    includes: ['**/src/**/*.(ts|tsx)'],
    excludes: ['node_modules']
  }
};

module.exports = config;

import React, {Component} from 'react';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';

const people = gql`
  query books {
    allBooks {
      title
    }
  }
`;

export class MainPage extends Component {
  render() {
    return (
      <Query query={people}>
        {({data, loading, error}) => {
          if (loading) return null;
          if (error) {
            console.log(error);
            return null;
          }

          // console.log({data});
          return <div>Hello World</div>;
        }}
      </Query>
    );
  }
}

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import gql from 'graphql-tag'

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:3001/graphql  ' }),
  cache: new InMemoryCache()
})
client.query({ query: gql`{ hello }` }).then(console.log);


class GraphQlTest extends Component {
  render() {
    return (
      <h1>Hello World</h1>
    )
  }
}

const app = (
  <ApolloProvider client={client}>
    <GraphQlTest />
  </ApolloProvider>
)

ReactDOM.render(app, document.getElementById('app'))
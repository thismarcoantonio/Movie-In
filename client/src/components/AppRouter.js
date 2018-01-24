import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'

import { client } from '../config/apolloConfig'
import AuthPage from './AuthPage'
import LandingPage from './LandingPage'

const AppRouter = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={LandingPage} exact={true} />
        <Route path="/auth" component={AuthPage} />
      </Switch>
    </BrowserRouter>
  </ApolloProvider>
)

export default AppRouter
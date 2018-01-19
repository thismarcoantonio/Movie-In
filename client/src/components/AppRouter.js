import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'

import { client } from '../config/apolloConfig'
import AuthPage from './AuthPage'
import LandingPage from './LandingPage'
import Header from './Header'

const AppRouter = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <div>
        <Switch>
          <Header />
        </Switch>
        <Switch>
          <Route path="/" component={LandingPage} exact={true} />
          <Route path="/auth" component={AuthPage} />
        </Switch>
      </div>
    </BrowserRouter>
  </ApolloProvider>
)

export default AppRouter
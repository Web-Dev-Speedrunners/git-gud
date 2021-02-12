import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import DonatePage from './pages/donate'
import Error404Page from './pages/error_404'
import FactsPage from './pages/facts'
import HomePage from './pages/home'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/facts" component={FactsPage} />
    <Route exact path="/donate" component={DonatePage} />
    <Route exact path="/error404" component={Error404Page} />
    <Redirect to="/error404" />
  </Switch>
)

export default Routes
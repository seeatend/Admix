import React from 'react'
import { Route, BrowserRouter, Redirect } from 'react-router-dom'

// Components
import Home from './components/pages/home'

const Router = () => (
  <BrowserRouter>
    <Route path="/" component={Home} exact={true} />
    <Redirect to="/" />
  </BrowserRouter>
)

export default Router

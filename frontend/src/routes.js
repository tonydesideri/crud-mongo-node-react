import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Select from './pages/select'

const Router = () => (
  <BrowserRouter>
    <Switch>

      <Route exact path="/" component={Select}/>

    </Switch>
  </BrowserRouter>
)

export default Router
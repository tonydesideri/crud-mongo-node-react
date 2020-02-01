import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Select from './pages/select'
import SelectOn from './pages/selectone'

const Router = () => (
  <BrowserRouter>
    <Switch>

      <Route exact path="/" component={Select}/>
      <Route  path="/cursos/:id" component={SelectOn}/>

    </Switch>
  </BrowserRouter>
)

export default Router
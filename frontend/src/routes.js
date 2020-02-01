import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Select from './pages/select'
import SelectOn from './pages/selectone'
import Insert from './pages/insert'
import Update from './pages/update'
import Delete from './pages/delete'

const Router = () => (
  <BrowserRouter>
    <Switch>

      <Route exact path="/" component={Select}/>
      <Route  path="/cursos/:id" component={SelectOn}/>
      <Route  path="/insert" component={Insert}/>
      <Route  path="/update/:id" component={Update}/>
      <Route  path="/delete/:id" component={Delete}/>

    </Switch>
  </BrowserRouter>
)

export default Router
import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Browse from '../Pages/Browse'
import Playlist from '../Pages/Playlist'
const Routes = () => (
  <Switch>
    <Route exact path="/" component={Browse} />
    <Route path="/playlist/:id" component={Playlist} />
  </Switch>
)

export default Routes

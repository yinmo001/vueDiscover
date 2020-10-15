import React, { Component } from 'react';
import {Route,HashRouter,Switch} from 'react-router-dom'

import App from "../pages/app"

import Login from "../pages/Login"
import Home from "../pages/Home"
import Life from "../pages/Life"
import Mine from "../pages/Mine"
import Shop from "../pages/Shop"
import City from "../pages/City"
import NotFound from "../pages/NotFound"
import Search from "../pages/Search"

export default class AppRouter extends Component{
  render(){
    return(
      <HashRouter>
        <App path="/">
          <Switch>
            <Route exact path="/" component={ Home }></Route>
            <Route exact path="/login" component={ Login }></Route>
            <Route exact path="/life" component={ Life }></Route>
            <Route exact path="/mine" component={ Mine }></Route>
            <Route exact path="/shop" component={ Shop }></Route>
            <Route exact path="/city" component={ City }></Route>
            <Route exact path="/search/:content" component={ Search }></Route>
            <Route exact path="/notFound" component={ NotFound }></Route>
          </Switch>
        </App>
      </HashRouter>
    )
  }
}
'use strict'

import React from 'react'
import { render } from 'react-dom'
import App from './App'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'
import Main from 'Main'
import Calendar from 'Calendar'
import TuitionFees from 'TuitionFees'
import Principal from 'Principal'
import VPrincipal from 'VPrincipal'
import StudentPortal from 'StudentPortal'
import Faculty from 'Faculty'
import Administration from 'Administration'
import Blog from 'Blog'
import SchoolHistory from 'SchoolHistory'
import Contact from 'Contact'

render(
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <Route path='calendar' component={Calendar} />
      <Route path='tuition' component={TuitionFees} />
      <Route path='principal' component={Principal} />
      <Route path='vprincipal' component={VPrincipal} />
      <Route path='studentportal' component={StudentPortal} />
      <Route path='faculty' component={Faculty} />
      <Route path='administration' component={Administration} />
      <Route path='blog' component={Blog} />
      <Route path='history' component={SchoolHistory} />
      <Route path='contact' component={Contact} />
      <IndexRoute component={App} />
    </Route>
  </Router>,
  document.getElementById('app')
)

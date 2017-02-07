import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import App from './components/App'
import AssociationExample from './containers/AssociationExample'
import ReplicationExample from './containers/ReplicationExample'
import ArrayExample from './containers/ArrayExample'
import ComplexExample from './components/ComplexForm'

export default () => (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="association" component={AssociationExample}/>
      <Route path="replication" component={ReplicationExample}/>
      <Route path="array" component={ArrayExample}/>
      <Route path="complex" component={ComplexExample}/>
    </Route>
  </Router>
)
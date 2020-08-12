import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import routes from './constants/routes.json'

import App from './App'

import store from './store'

import Configuration from './components/Configuration.jsx'



ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Switch>
          <Route path={routes.CONFIGURATION} component={Configuration} />
        </Switch>
        <Configuration />
      </App>
    </Router>
  </Provider>,
  document.getElementById('root')
)

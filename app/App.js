import './index.css'
import React from 'react'

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import routes from './constants/routes.json'


import Home          from './containers/Home'
import Configuration from './containers/Configuration'
import SetupImages   from './containers/SetupImages'
import SetupServices from './containers/SetupServices'
import Results       from './containers/Results'
import Menu          from './containers/Menu'

const App = () =>  {
  

  return(
    <Router>
      <Menu/>
      <Switch>     
          <Route path={routes.CONFIGURATION} component={Configuration} />
          <Route path={routes.IMAGESETUP} component={SetupImages} />
          <Route path={routes.SERVICESETUP} component={SetupServices} />
          <Route path={routes.RESULTS} component={Results} />
          <Route path={routes.HOME} component={Home} />            
      </Switch>
    </Router> 
  )
}

export default App
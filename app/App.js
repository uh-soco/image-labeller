import './index.css'
import React from 'react'

import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom'
import routes from './constants/routes.json'
import Home from './components/Home.jsx'
import Configuration from './components/Configuration.jsx'

const App = () =>  {
  

    return(
        <Router>
            <Switch>     
                <Route path={routes.CONFIGURATION} component={Configuration} />         
                <Route path={routes.HOME} component={Home} />            
            </Switch>
        </Router> 
    )
}

export default App
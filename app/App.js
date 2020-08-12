import './index.css'
import React from 'react'
import { Switch, Route, Link } from 'react-router-dom';
import routes from './constants/routes.json'

//import { useSelector } from  'react-redux'

const App = () =>  {
  

    return(
        <div>
        <p>The fool didn't know it was impossible, &nbsp;so he did it.</p>
        <Link to={routes.CONFIGURATION}>Configure services</Link>
        </div>
    )
}

export default App
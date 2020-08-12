import React from 'react'
import { Link } from 'react-router-dom'
import routes from '../constants/routes.json'

const Home = () => {

    return(
        <div>
        <Link to={routes.CONFIGURATION}>Configure services</Link>
        <p>The fool didn't know it was impossible, &nbsp;so he did it.</p>
        
        </div>
    )
}

export default Home
import './index.css'
import React from 'react'

import Counter from './components/Counter'
import Notification from './components/Notification'


import { useSelector } from  'react-redux'

const App = () =>  {

    const notification = useSelector(state => state.Notification)
    

    return(
        <div>
        <Notification notification={ notification }></Notification>
        <Counter/>
        <p>The fool didn't know it was impossible, &nbsp;so he did it.</p>
        </div>
    )
}

export default App
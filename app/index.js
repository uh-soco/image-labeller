import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'

import Counter from './components/Counter'
import Notification from './components/Notification'

import { createStore, combineReducers } from 'redux'

import CounterReducer from './reducers/CounterReducer'
import NotificationReducer from './reducers/NotificationReducer'

const reducers = combineReducers({
    Counter: CounterReducer,
    Notification: NotificationReducer
})


const sailioMME = createStore(reducers) // initialized to 0


const App = ({ store }) => (
  <div>
    <p>The fool didn't know it was impossible, &nbsp;so he did it.</p>
    <Counter count={ store.getState().Counter  } dispatcher={store.dispatch} />
    <Notification notification={ store.getState().Notification }></Notification>
  </div>


)

const renderointi = () => ReactDOM.render(<App store={sailioMME} />, document.getElementById('root'))

sailioMME.subscribe(renderointi)

renderointi()
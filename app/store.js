
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import CounterReducer from './reducers/CounterReducer'
import NotificationReducer from './reducers/NotificationReducer'

import { composeWithDevTools  } from 'redux-devtools-extension'

const reducers = combineReducers({
    Counter: CounterReducer,
    Notification: NotificationReducer
})


const sailioMME = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(thunk)
    )
  ) 


export default sailioMME
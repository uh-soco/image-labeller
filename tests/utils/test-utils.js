
import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import '@testing-library/jest-dom'

import CounterReducer from '../../app/reducers/CounterReducer'
import NotificationReducer from '../../app/reducers/NotificationReducer'

const reducers = combineReducers({
    Counter: CounterReducer,
    Notification: NotificationReducer
})

const render = (
    ui,
    {
      initialState,
      store = createStore(reducers, initialState),
      ...renderOptions
    } = {}
  )  => {

  const Wrapper = ({ children }) => {
    return <Provider store={store}>{children}</Provider>
  }

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })

}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }
import React from 'react'
import { render } from '../utils/test-utils'
import Counter from '../../app/components/Counter'


it('Renders the connected app with initialState', () => {

  const counterInitialValue = 9001
  
  const component = render(<Counter />, { initialState: { Counter: counterInitialValue } })

  expect( component.container ).toHaveTextContent( counterInitialValue )

})
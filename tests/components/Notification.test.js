
import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Notification from '../../app/components/Notification'


it('should create a component including a header', () => {

  const component = render(<Notification notification='Notifikaatio'/>)

  const header =  component.container.querySelector('h2')

  expect( header ).toBeTruthy()

})  

it('should display the specified notification', () => {


  const testNotification = 'Notifikaatio'

  const component = render(<Notification notification={testNotification}/>)

  expect( component.container ).toHaveTextContent(testNotification)

})  

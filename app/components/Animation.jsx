import React from 'react'
import { Spinner, Alert } from 'react-bootstrap'

const Animation = ({ animationtext }) => {

  return(

    <Alert variant='info'>
      <Spinner animation="border" role="status" />
      <span style={{marginLeft: '2%'}}>{ animationtext }</span>
    </Alert>
  )
}

export default Animation
import React, { useState } from 'react'
import IncrementCount from '../actions/IncrementCount'
import MinusCount from '../actions/MinusCount'

const Counter = ({ count, dispatcher })  => {


  const handleClick = () => {
    console.log('Klikattu!')
    dispatcher(IncrementCount())

  }

  const handleClickMinus = () => {
      console.log('Miiiiinus')
      dispatcher(MinusCount())
  }

  return(
    <div>
      <div> { count } </div>
      <button className='fancy' onClick={handleClick}>nappiMME</button>
      <button className='fancy' onClick={handleClickMinus}>minus</button>
    </div>
  )

}

export default Counter
import React from 'react'
import IncrementCount from '../actions/IncrementCount'
import MinusCount from '../actions/MinusCount'


import { useSelector, useDispatch } from  'react-redux'


const Counter = ()  => {


  const counter      = useSelector(state => state.Counter)
  const dispatch     = useDispatch()


  const handleClick = () => {
    console.log('Klikattu!')
    dispatch(IncrementCount())

  }

  const handleClickMinus = () => {
      console.log('Miiiiinus')
      dispatch(MinusCount())
  }

  return(
    <div>
      <div> { counter } </div>
      <button className='fancy' onClick={handleClick}>nappiMME</button>
      <button className='fancy' onClick={handleClickMinus}>minus</button>
    </div>
  )

}

export default Counter
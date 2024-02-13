import React from 'react'
import useQauntity from './useQauntity'

function Counter() {
    const [item, plus, minus] = useQauntity(1);
  return (
    <div className='quantity'>
        <button className='add' onClick={minus}>-</button>
        <p>{item}</p>
        <button className='add' onClick={plus}>+</button>
    </div>
  )
}

export default Counter
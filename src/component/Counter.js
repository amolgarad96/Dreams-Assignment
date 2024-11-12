import React from 'react'
import CustomHook from './CustomHook'

function Counter() {
    const {count,handleAddBtn,handleSubStract } = CustomHook();
    console.log(count)
  return (
    <>
    <p>{count}</p>
    <button onClick={handleAddBtn}>Add</button>
    <button onClick={handleSubStract}>Sub</button>

    </>
  )
}

export default Counter
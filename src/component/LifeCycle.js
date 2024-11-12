import React, { useEffect, useState } from 'react'

function LifeCycle() {
    const [count,setCount] = useState(0);

    useEffect(()=>{
        console.log('component Mounted??')
        
        return ()=>{
            console.log("component unmounted")
        }
    },[])

  return (
    <>
    <p>Count: {count}</p>
    <button onClick={() =>setCount(count+1)}>Click</button>
    </>
  )
}

export default LifeCycle
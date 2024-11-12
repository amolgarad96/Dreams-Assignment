import React, { useEffect, useState } from 'react'

function LifeCycleUseEffect() {
    const [count,setCount] = useState(0);
    const [isActive, setIsActive] = useState(true)
    useEffect(()=>{
        let interval;
        if(isActive){

             interval = setInterval(()=>{
                setCount((prev)=>prev+1)
            },1000)
        }

        return ()=>{
            console.log("clear")
            clearInterval(interval)
        }
    },[isActive])
    const handleStop = () =>{
        setIsActive(false)
    }
  return (
   <>
   <h2>{count}</h2>
   <button onClick={()=>setCount(0)}>Reset btn</button>
   <button onClick={handleStop}>Stop</button>

   </>
  )
}

export default LifeCycleUseEffect
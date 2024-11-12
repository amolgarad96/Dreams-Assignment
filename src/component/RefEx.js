import React, { useEffect, useRef, useState } from 'react'

function RefEx() {
    const inputRef = useRef()
    const [num,setNum] = useState(0)

    const handlebtn = () =>{
        inputRef.current.style.width = "500px"
    }

    return (
        <>
            <input
                ref={inputRef}
                type='text'
                value={num}
                placeholder='Enter here...'
                className='field'
                onChange={(e)=>setNum(e.target.value)}
            />
            <button onClick={handlebtn}>click</button>
        </>
    )
}

export default RefEx
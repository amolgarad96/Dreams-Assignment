import React, { useRef, useState } from 'react'

function Assignment1() {
    const [data, setData] = useState([
        { id: 1, isClicked: false, isVisible: true, order: -1 },
        { id: 2, isClicked: false, isVisible: true, order: -1 },
        { id: 3, isClicked: false, isVisible: true, order: -1 },
        { id: 4, isClicked: false, isVisible: true, order: -1 },
        { id: 5, isClicked: false, isVisible: false, order: -1 },
        { id: 6, isClicked: false, isVisible: false, order: -1 },
        { id: 7, isClicked: false, isVisible: true, order: -1 },
        { id: 8, isClicked: false, isVisible: true, order: -1 },
        { id: 9, isClicked: false, isVisible: true, order: -1 }
    ])

    const counterRef = useRef(0)
    const handleClick = (id) =>{
        counterRef.current += 1;
        console.log(id);
        let newgrid = [...data]
        console.log(newgrid);
        console.log(newgrid[id-1])
        newgrid[id-1].isClicked = true
        newgrid[id-1].order = counterRef.current 
        setData(newgrid)
        if(counterRef.current === 7){
            resetCounter();
        }
    }

    const resetCounter = () =>{
        let newgrid = [...data]
        let sortedArr = newgrid.sort((a,b)=> a.order - b.order);
        console.log("sortedArr",sortedArr)
        newgrid.forEach((it,i)=>{
            setTimeout(()=>{
                setData(prev=> prev.map((it1)=> it1.id === it.id ? {...it1, isClicked:false,order: -1} : it1))
            },i * 1000)
        })
        counterRef.current = 0;
    }
    return (
        <>
            <div className='container'>
                <div className='box-content'>
                    {data.map((item, idx) => {
                        return item.isVisible ? <div className={`box ${item.isClicked ? 'boxblack' : 'boxwhite'}`} key={idx} onClick={()=>handleClick(item.id)}>
                             <p className='boxNumber'>{item.id}</p>
                         </div> :<div></div>
                    }
                    )}
                </div>
            </div>
        </>
    )
}

export default Assignment1
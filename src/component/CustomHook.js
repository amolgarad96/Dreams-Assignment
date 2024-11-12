import React, { useState } from "react";
export default function CustomHook(){
    const [count,setCount] = useState(0);

    const handleAddBtn = () =>{
        setCount(prev=>prev+1);
    }
    const handleSubStract = () =>{
        if(count > 0){
            setCount(prev=>prev-1);
        }
    }
    return {count, handleAddBtn, handleSubStract}

}
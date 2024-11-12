import React, { useReducer } from 'react'

function ReducerHook() {
    
    function reducer(state,action){
        if(action.type === 'INCR'){
            return state + 1;
        }else if(action.type === 'DECR'){
            if(state > 0){
                return state - 1;
            }else{
                return state
            }
        }else {
            return state;
        }
        
    }
    const [count,dispatch] = useReducer(reducer,0)
  return (
    <>
    <p>{count}</p>
    <button onClick={()=>dispatch({type:'INCR'})}>Add</button>
    <button onClick={()=>dispatch({type:'DECR'})}>SubStract</button>

    </>
  )
}

export default ReducerHook
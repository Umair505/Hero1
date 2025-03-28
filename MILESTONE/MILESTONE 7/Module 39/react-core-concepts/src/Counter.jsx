import { useState } from "react"

export default function Counter(){
    const [count,setCount]= useState(0);
    const handelAdd = () =>{
        setCount(count+1)
    }
    const counterStyle = {
        border :' 2px solid yellow',
        color :'white',
        padding : '10px'
    }
    return(
        <div style={counterStyle}>
            <h3>Count : {count}</h3>
            <button onClick={handelAdd}>Add</button>
        </div>
    )
}
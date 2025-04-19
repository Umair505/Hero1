import { useState } from "react"
impr
export default function Batsman(){
    let [runs,setRuns]= useState(0)
    const handleSingle = () =>{
        const updateRuns = runs + 1;
        setRuns(updateRuns);
    }
    const handleFour = () =>{
        setRuns(runs + 4);
    }
    const handleSix = () =>{
        setRuns(runs + 6);
    }
    return(
        <div>
            <h3>Player : Bangla Batsman</h3>
            {
                runs > 50 && <p>Your score: {runs}</p>
            }
            {
                runs >= 100 && <p>Your score: {runs}</p>
            }
            <h1>Score : {runs}</h1>
            <button onClick={handleSingle}>Single</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}
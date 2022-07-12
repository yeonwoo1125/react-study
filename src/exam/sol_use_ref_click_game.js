import React, { useState, useEffect, useRef } from "react"
import ReactDOM from "react-dom"

function CounterGame () {
    const [count, setCount] = useState(0)
    const [timeLeft, setTimeLeft] = useState(10)
    const id = useRef(null)

    const clear = () => window.clearInterval(id.current)

    useEffect(() => {
        id.current = setInterval(()=>{
            setTimeLeft(p => p-1)
        },1000)
        return clear
    })

    useEffect(() => {
        if(timeLeft === 0) clear()
    }, [timeLeft])

    return (
        <div className="App">
            <h1>{count}</h1>
            <h2>Time left: {timeLeft} seconds</h2>
            {timeLeft !== 0 ? <button onClick={() => setCount((c) => c + 1)}>+</button> : null}
        </div>
    );
}

ReactDOM.render(<CounterGame />, document.getElementById("root"))
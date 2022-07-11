import ReactDOM from "react-dom";
import {useState, useRef, useEffect} from "react";

const CounterGame = () => {
    const [count, setCount] = useState(0)
    const [timeLeft, setTimeLeft] = useState(10)
    const id = useRef(null)

    const clear = () => window.clearInterval(id.current)

    useEffect(()=> {
        id.current = setInterval(()=>{
            if(timeLeft === 0) clearInterval(id.current)
            else {
                setTimeLeft(timeLeft - 1)
            }
        },1000)
        return clear
    },[timeLeft])

    return (
        <div>
            <h1>{count}</h1>
            <h2>Time left : {timeLeft} seconds</h2>
            {timeLeft !== 0 ?
                <button onClick={() => setCount(c => c + 1)}>+</button>
             : null}
            </div>
    )
}

ReactDOM.render(<CounterGame/>, document.getElementById('root'))
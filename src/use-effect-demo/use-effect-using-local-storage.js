import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";

const CounterWithLocalStorage = (props) => {
    const [count, setCount] = useState(() => {
        return localStorage.getItem('count') ?? 0
    })

    useEffect(() => {
        localStorage.setItem('count', count)
    }, [count])

    return (
        <div>
            <p>count : {count}</p>
            <button onClick={() => setCount(c => c+1)}>+</button>
            <button onClick={() => setCount(c => c-1)}>-</button>
        </div>
    )
}

ReactDOM.render(<CounterWithLocalStorage/>, document.getElementById('root'))
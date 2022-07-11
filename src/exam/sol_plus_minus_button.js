import ReactDOM from "react-dom";
import {useState} from "react";

const Counter = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(p => p+1)}>+</button>
            <button onClick={() => setCount(p => p-1)}>-</button>
        </div>
    )
}

ReactDOM.render(<Counter/>, document.getElementById('root'))
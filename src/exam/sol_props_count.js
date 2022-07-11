import ReactDOM from "react-dom";
import {useState} from "react";

const Counter = (props) => {
    const [count, setCount] = useState(0)
    const increase = () => setCount(count + 1)
    const decrease = () => setCount(count -1)
    const add = (amount) => setCount(count + amount)
    return (
        <div>
            <p>{count}</p>
            <button onClick={()=> add(5)}>+</button>
            <button onClick={()=> add(-10)}>-</button>
        </div>
    )
}

ReactDOM.render(<Counter/>, document.getElementById('root'))
import ReactDOM from "react-dom";
import {useState} from "react";

const Counter = function (props){
    const [count, setCount] = useState(0)
    const increase = () => setCount(prev => prev + props.val)
    const decrease = () => setCount(prev => prev - props.val)


    return (
        <div>
            <h2>{count}</h2>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
        </div>
    )
}

ReactDOM.render(<Counter val = {10}/>, document.getElementById('root'))
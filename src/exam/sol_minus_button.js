import ReactDOM from "react-dom";
import {useState} from "react";

const MinusButton = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count-1)}>-</button>
        </div>
    )
}

ReactDOM.render(<MinusButton />, document.getElementById('root'))
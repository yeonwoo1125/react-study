import ReactDOM from 'react-dom'
import {useState} from "react";

const Counter = props => {
    const [count, setCount] = useState(0)

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count-1)}>1 감소시키기</button>
        </div>
    )
}

ReactDOM.render(<Counter />, document.getElementById('root'))
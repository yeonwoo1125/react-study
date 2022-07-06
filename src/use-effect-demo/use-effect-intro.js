import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";

function UseEffectDemo(props){
    const [state, setState] = useState("")

    useEffect(() => {
        console.log("useEffect")
    })

    return (
        <div>
            <input type='text' value={state}
                   onChange={(e) => setState(e.target.value)}/>
        </div>
    )
}

function Counter(){
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `You clicked ${count} times`
    })

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count+1)}>Click me</button>
        </div>
    )
}

ReactDOM.render((
    <div>
        <UseEffectDemo/>
        <Counter/>
    </div>
), document.getElementById('root'))
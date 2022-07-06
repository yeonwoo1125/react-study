import React, {useEffect, useState} from "react"
import ReactDOM from "react-dom"
import Toggler from "./Toggler"

function UseEffectUnmountDemo(props) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const id = setInterval(function() {
            console.log('setCount')
            setCount(c => c + 1)
        }, 1000)

        return () => {
            // 타이머 정리
            clearInterval(id)
        }
    }, [])

    return <div>{count}</div>
}

ReactDOM.render(<Toggler><UseEffectUnmountDemo /></Toggler>, document.getElementById("root"))
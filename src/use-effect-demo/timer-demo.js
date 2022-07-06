import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

const Timer = function(props) {
    const [timerState, setTimerState] = useState({
        time: props.time,
        timeout: false
    })

    useEffect(() => {
        const id = setInterval(() => {
            setTimerState(prevState => {
                if( prevState.time === 1 ) {
                    clearInterval(id)
                    return {timeout: true, time: prevState.time - 1}
                } else {
                    return { ...prevState, time: prevState.time - 1 }
                }
            })
        }, 1000)
        return () => {
            clearInterval(id)
        }
    }, [])

    return (
        <div>
            {timerState.timeout ? <h2>timeout</h2> : <h2>{timerState.time}</h2>}
        </div>
    )
}

const App = function(props) {
    const [trigger, setTrigger] = useState(false)

    return (
        <div>
            {
                !trigger && <div>
                    <Timer time={5} />
                    <Timer time={10} />
                    <Timer time={15} />
                </div>
            }
            <button onClick={() => setTrigger(true)}>타이머 제거</button>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
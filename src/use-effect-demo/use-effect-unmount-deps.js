import React, {useEffect, useState} from "react"
import ReactDOM from "react-dom"
import {DebounceInput} from 'react-debounce-input'

function subscribe(subject)  {
    const id = setInterval( function() {
        console.log(`${subject} 관련 소식 구독`)
    }, 1000);

    return function() {
        console.log(`${subject} 관련 소식 구독 해제`)
        clearInterval(id)
    }
}

function UseEffectUnmountDemo(props) {
    const [query, setQuery] = useState('')

    useEffect(() => {
        const unsubscribe = subscribe(query)
        return () => unsubscribe()
    }, [query])

    return <div>
        <DebounceInput type="text" value={query} debounceTimeout={1000} onChange={(e) => {
            setQuery(e.target.value)
        }} />
    </div>
}

ReactDOM.render(<UseEffectUnmountDemo />, document.getElementById("root"))
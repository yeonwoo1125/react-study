import React, { useState, useRef } from 'react'
import ReactDOM from 'react-dom'

const RefDemo = function(props) {
    const [trigger, setTrigger] = useState(true)

    const inputEl = useRef()
    const canvasEl = useRef()
    const value = useRef(1)

    return (
        <>
            <input type='text' ref={inputEl} />
            <br />
            <button onClick={() => setTrigger(prev => !prev)}>Trigger re-render {`(${trigger})`}</button>
            <br />
            <button onClick={() => {
                value.current++
            }}>Update ref {`(${value.current})`}</button>
            <br />
            <button onClick={() => {
                inputEl.current.focus()}}>Focus input</button>
            <hr />
            <canvas width="200" height="200" ref={canvasEl} />
            <br />
            <button onClick={() => {
                const c = canvasEl.current
                const ctx = c.getContext("2d")

                const grd = ctx.createLinearGradient(0, 0, 200, 0)
                grd.addColorStop(0, trigger ? "red" : "white")
                grd.addColorStop(1, trigger ? "white" : "red")

                ctx.fillStyle = grd
                ctx.fillRect(0, 0, 200, 200)
            }}>Draw gradient</button>
        </>
    )
}

ReactDOM.render(<RefDemo />, document.getElementById("root"))
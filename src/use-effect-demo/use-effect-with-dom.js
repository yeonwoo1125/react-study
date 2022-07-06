import React, {useEffect, useState} from "react"
import ReactDOM from "react-dom"
import Toggler from "./Toggler"

function UseEffectWithDOM(props) {
    const [pos, setPos] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const onMouseMove = e => {
            setPos({ x: e.offsetX, y: e.offsetY })
        }
        window.addEventListener('mousemove', onMouseMove)

        return () => {
            window.removeEventListener('mousemove', onMouseMove)
        }
    }, [])

    return <div>{pos.x},{pos.y}</div>
}

ReactDOM.render(<Toggler><UseEffectWithDOM /></Toggler>, document.getElementById("root"))
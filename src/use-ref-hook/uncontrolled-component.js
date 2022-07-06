import React, { useRef } from 'react'
import ReactDOM from 'react-dom'

const FormUncontrolledComponent = function(props) {
    const input = useRef()
    const fileInput = useRef()

    const handleSubmit = (e) => {
        const v = input.current.value;
        const file = fileInput.current.value;
        alert(`value : ${v}\nfile : ${file}`);
        e.preventDefault();
    }

    return (
        <form>
            <input type="text" ref={input} /><br />
            <input type="file" ref={fileInput} /><br />
            <input type="submit" onClick={handleSubmit} />
        </form>
    )
}

ReactDOM.render(<FormUncontrolledComponent />, document.getElementById("root"))
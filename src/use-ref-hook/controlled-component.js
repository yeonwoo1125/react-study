import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const FormControlledComponent = function(props) {
    const [state, setState] = useState({
        text: '',
        textareaText: '',
        checked: false,
        selected: 'default'
    })

    const handleTextChange = e => setState({ ...state, text: e.target.value })
    const handleTextareaTextChange = e => setState({ ...state, textareaText: e.target.value })
    const handleCheckChange = e => setState({ ...state, checked: e.target.checked })
    const handleSelectChange = e => setState({ ...state, selected: e.target.value })

    return (
        <form>
            <p>text : {state.text}</p>
            <input type="text" value={state.text} onChange={handleTextChange} /><br />
            <p>textarea text : {state.textareaText}</p>
            <textarea value={state.textareaText} onChange={handleTextareaTextChange} /><br />
            <p>checked : {state.checked + ""}</p>
            <input type="checkbox" onChange={handleCheckChange} checked={state.checked} /><br />
            <p>selected : {state.selected + ""}</p>
            <select value={state.selected} onChange={handleSelectChange}>
                <option value="default">Default</option>
                <option value="item1">Item 1</option>
                <option value="item2">Item 2</option>
                <option value="item3">Item 3</option>
            </select>
            <br />
        </form>
    )
}

ReactDOM.render(<FormControlledComponent />, document.getElementById("root"))
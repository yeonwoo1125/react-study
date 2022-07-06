import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const ReservationForm = function(props) {
    const [state, setState] = useState({
        name: '',
        date: '',
        isForeigner: false,
        roomNumber: 'one'
    })

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setState({
            ...state,
            [name]: value
        });
    }
    const handleSubmit = (e) => {
        alert("submit!");
        e.preventDefault();
    }

    return (
        <form>
            <p>{JSON.stringify(state)}</p>
            <hr />
            <label>이름 <input value={state.name} name="name" type="text" onChange={handleInputChange} /></label><br />
            <label>외국인 여부 <input checked={state.isForeigner} name="isForeigner" type="checkbox" onChange={handleInputChange} /></label><br />
            <select name="roomNumber" value={state.roomNumber} onChange={handleInputChange}>
                <option value="one">1개</option>
                <option value="two">2개</option>
                <option value="three">3개</option>
            </select>
            <br />
            <input type="submit" value="제출" onClick={handleSubmit} />
        </form>
    )
}

ReactDOM.render(<ReservationForm />, document.getElementById("root"))
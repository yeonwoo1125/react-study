import React, { useState, useEffect, useRef } from "react"
import ReactDOM from "react-dom"

function Form() {
    const nameInputRef = useRef()
    const emailInputRef = useRef()
    const passwordInputRef = useRef()

    const handleSubmit = e => {

        const name = nameInputRef.current.value
        const email = emailInputRef.current.value
        const password = passwordInputRef.current.value

        alert(`name : ${name}, email : ${email}, password : ${password}`)
        e.preventDefault()
    }

    const handleReset = () => {
        nameInputRef.current.value = '';
        emailInputRef.current.value = '';
        passwordInputRef.current.value = '';
    }

    return (
        <>
            <label>
                Name:
                <input type="text" placeholder="name" ref={nameInputRef}/>
            </label>
            <label>
                Email:
                <input type="text" placeholder="email" ref={emailInputRef}/>
            </label>
            <label>
                Password:
                <input type="password" placeholder="password" ref={passwordInputRef}/>
            </label>
            <hr />
            <button onClick={() => nameInputRef.current.focus()}>
                Focus Name Input
            </button>
            <button onClick={() => emailInputRef.current.focus()}>
                Focus Email Input
            </button>
            <button onClick={() => passwordInputRef.current.focus()}>
                Focus Password Input
            </button>
            <hr />
            <button type="submit" onClick={handleSubmit}>Submit</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )
}

ReactDOM.render(<Form />, document.getElementById("root"))
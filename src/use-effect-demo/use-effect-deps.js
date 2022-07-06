import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";

function UseEffectDepsDemo(props){
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    useEffect(()=> console.log("의존 배열이 없어 항상 실행"))
    useEffect(()=> console.log("의존 배열이 []이므로 한번 실행"),[])
    useEffect(()=> console.log("name이 변경된 경우 실행"), [name])
    useEffect(()=> console.log("password가 변경된 경우 실행"),[password])

    useEffect(()=> console.log("name, password가 변경된 경우"),[name, password])

    return(
        <div>
            <label>이름</label>
            <input type='text' value={name} onChange={e => setName(e.target.value)}/>
            <br/>

            <label>비밀번호</label>
            <input type='text' value={password} onChange={e => setPassword(e.target.value)}/>
        </div>
    )
}

ReactDOM.render(<UseEffectDepsDemo/>, document.getElementById('root'))
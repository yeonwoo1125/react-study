import ReactDOM from "react-dom";
import {useEffect, useState} from "react";

const Test = () =>{

    useEffect(()=>{
        console.log('실행')
        let count = 0;
        const id = setInterval(()=>{
            console.log('타이머 실행중')
            count++;
        },1000)
        if (count === 5) clearInterval(id)
        return () => {
            console.log('정리작업')
            clearInterval(id)
        }
    })

    return <div>use effect</div>
}

ReactDOM.render(<Test/>, document.getElementById('root'))
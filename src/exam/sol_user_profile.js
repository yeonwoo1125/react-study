import ReactDOM from "react-dom";
import {useState} from "react";

const UserProfile = () => {
    const [userName, setUserName] = useState('ShuShu')
    const [userAge, setUserAge] = useState(19)
    const [emailAddress, setEmailAddress] = useState('hhhh@naver.com')

    return (
        <div>
            <p>{userName}</p>
            <p>{userAge}</p>
            <p>{emailAddress}</p>
        </div>
    )
}

ReactDOM.render(<UserProfile/>, document.getElementById('root'))
import ReactDOM from "react-dom";
import {useState} from "react";

const UserProfile = props => {
    const [userName, setUserName] = useState("ShuShu")
    const [userAge, setUserAge] = useState(22)
    const [emailAddress, setEmailAddress] = useState('gg@gmail.com')

    return (
        <div>
            <h1>Profile</h1>
            <p>name : {userName}</p>
            <p>age : {userAge}</p>
            <p>email : {emailAddress}</p>
        </div>
    )
}

ReactDOM.render(<UserProfile />, document.getElementById('root'))
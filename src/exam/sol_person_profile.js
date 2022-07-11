import ReactDOM from "react-dom";

const PersonProfileWithUserObject = (props) =>{
    const {name, gender, age, profile} = props.person;
    return <div>
        <p>{name}</p>
        <p>{gender}</p>
        <p>{age}</p>
        <p>{profile}</p>
    </div>
}

const person = {
    name : "Jane",
    age : 28,
    gender : 'female',
    profile : 'https://rendomuser.me/api/portraits/women/75/jpg'

}

ReactDOM.render(<PersonProfileWithUserObject person={person}/>, document.getElementById('root'))
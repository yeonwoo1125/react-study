import ReactDOM from "react-dom";

const Greeting = (props) => {
    return <h1>Hello, {props.name}</h1>
}

ReactDOM.render(<Greeting name="yeonwoo"/>, document.getElementById('root'))
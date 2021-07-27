import {useState} from 'react';
import axios from 'axios';

export default function TopicInput (props) {
    const [enteredInput, setEnteredInput] = useState('');


    const inputChangeHandler = (e) => {
        setEnteredInput(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()

        axios.post("https://jsonplaceholder.typicode.com/posts", {
            title: enteredInput,
        }).then((res) => console.log(res.data))

        // props.onSubmitInput({title: 'new'})
        //https://stackoverflow.com/questions/55028583/how-do-i-call-setstate-from-another-component-in-reactjs
    }

    return (
        <div>
            <form className="formContainer">
                <label>New Topic</label>
                <input onChange={inputChangeHandler} value={enteredInput} type="text"/>
                <button onClick={submitHandler} type="submit">Submit</button>
            </form>
        </div>
    )
}
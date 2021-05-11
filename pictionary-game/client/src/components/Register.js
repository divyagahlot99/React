import React from 'react'
import { useHistory } from "react-router-dom"
import '../App.css';

export default function Register(props) {
    let name = React.createRef()
    let history = useHistory()
    function onSubmit(e) {
        e.preventDefault();
        history.push({ 
            pathname: '/pictionary',
            state: name.current.value
           })
    }
    return (
        <div className = "register">
            <form>
                <center>
                <h2>Enter your Name!</h2>
                <input placeholder="Your Name" type="name" className = "inputName" ref = {name}/>
                {/* <button onClick={onSubmit}>Login</button> */}
                <div className="example_f" align="center" onClick={onSubmit}><span>Play Game!</span></div>

                </center>
            </form>
        </div>
    )
}

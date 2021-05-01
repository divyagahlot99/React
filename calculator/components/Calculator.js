import React from 'react'
import Operator from './Operator.js'
import Digit from './Digit.js'
import Functions from './Functions.js'
import Display from './Display.js'
import '../App.css';
import {useState} from 'react'

function Calculator() {
    const [getState, setState] = useState("0")
    return(
        <div className = "calc-body">
            <Display getState = {getState} setState = {setState}/>
            <br/><br/><br/><br/>
            <Functions getState = {getState} setState = {setState} val = "C"/>
            <Functions getState = {getState} setState = {setState} val = "%"/>
            <Functions getState = {getState} setState = {setState} val = "DEL"/>
            <Operator getState = {getState} setState = {setState} val = "/"/>
            <br/>
            <Digit getState = {getState} setState = {setState} val = "7"/>
            <Digit getState = {getState} setState = {setState} val = "8"/>
            <Digit getState = {getState} setState = {setState} val = "9"/>
            <Operator getState = {getState} setState = {setState} val = "*"/>
            <br/>
            <Digit getState = {getState} setState = {setState} val = "4"/>
            <Digit getState = {getState} setState = {setState} val = "5"/>
            <Digit getState = {getState} setState = {setState} val = "6"/>
            <Operator getState = {getState} setState = {setState} val = "-"/>
            <br/>
            <Digit getState = {getState} setState = {setState} val = "1"/>
            <Digit getState = {getState} setState = {setState} val = "2"/>
            <Digit getState = {getState} setState = {setState} val = "3"/>
            <Operator getState = {getState} setState = {setState} val = "+"/>
            <br/>
            <Digit getState = {getState} setState = {setState} val = "EXP"/>
            <Digit getState = {getState} setState = {setState} val = "0"/>
            <Digit getState = {getState} setState = {setState} val = "."/>
            <Operator getState = {getState} setState = {setState} val = "="/>
        </div>

    )
}

export default Calculator;

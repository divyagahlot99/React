import React from 'react'

function Operator(props) {
    function process() {
        if (props.val === '=') {
            console.log("Calculate!")
            props.setState(eval(props.getState))
            return
        }
        props.setState(props.getState + props.val)
        console.log(props.val);
        console.log(props.getState);
    }
    return(
        <span class = "elements" style={{backgroundColor: "#ED8902" }} onClick = {process}>{props.val}</span>
    )
}

export default Operator;
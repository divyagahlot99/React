import React from 'react'

function Digit(props) {
    function process() {
        if (props.getState === '0') {
            props.setState(props.val)
            return
        }
        props.setState(props.getState + props.val)
        console.log(props.val);
        console.log(props.getState);
    }
    return(
        <span class = "elements" style={{backgroundColor: "#666"}} onClick = {process}>{props.val}</span>
    )
}

export default Digit;

import React from 'react'

function Functions(props) {
    function process() {
        if (props.getState === '0') {
            return
        }
        console.log(props.val)
        if (props.val === 'C') {
            props.setState('0')
            return
        }
        props.setState(props.getState + props.val)
        console.log(props.val);
        console.log(props.getState);
    }
    return(
        <span class = "elements" style={{backgroundColor: "#EEE" }} onClick = {process}>{props.val}</span>
    )
}

export default Functions;
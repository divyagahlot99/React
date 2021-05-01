import React from 'react'

function Display(props) {
    return(
        <div className = "display">
            {props.getState}
        </div>
    )
}

export default Display;

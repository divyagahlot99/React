import React from'react'

function Contact(props) {
    function del() {
        props.setState(props.getState.filter(item => (item.Name !== props.Name) || (item.PhoneNo !== props.PhoneNo)));
    }
    return(
        <div>
            {props.Name}, {props.PhoneNo}
            <button onClick = {() => del()}>Delete</button>
        </div>
    )
}

export default Contact

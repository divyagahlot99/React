import React from 'react'
import Contact from './Contact'

function ContactList(props) {
    return (
        <div>
            CONTACTS LIST
            {props.getState.map(contact => <Contact getState = {props.getState} setState = {props.setState} {...contact}></Contact>)}
        </div>
    )
}

export default ContactList

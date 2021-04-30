import React from 'react'

function AddContactForm (props) {
    let userName = React.createRef();
    let userPhoneNo = React.createRef();

    function formSubmit(event) {
        event.preventDefault();
        props.setState(props.getState.concat({"Name": userName.current.value, "PhoneNo": userPhoneNo.current.value}))
    }
    
    return(
        <div>
            ADD NEW CONTACT
            <form onSubmit = {formSubmit}>
                Enter Name:<input type = "text" ref = {userName}/><br/>
                Enter PhoneNo:<input type = "text" ref = {userPhoneNo}/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddContactForm

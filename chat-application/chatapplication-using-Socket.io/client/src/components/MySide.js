import React from 'react'
import MyText from './MyText' 

export default function MySide(props) {
    console.log("Whyyyyyyy"+props.currmessage)
    return (
        <div style = {{marginLeft: 200, width: 200}}>
            <MyText getId = {props.getId} setId = {props.setId} getMessage = {props.getMessage} setMessage = {props.setMessage} getMessageHistory = {props.getMessageHistory} setMessageHistory = {props.setMessageHistory} currmessageid = {props.currmessageid} currmessagebody = {props.currmessagebody}>
                {props.currmessagebody}
            </MyText>
        </div>
    )
}

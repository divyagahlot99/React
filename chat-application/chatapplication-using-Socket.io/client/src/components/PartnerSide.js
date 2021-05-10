import React from 'react'
import PartnerText from './PartnerText'

export default function PartnerSide(props) {
    console.log("Whyyyyyyy"+props.currmessagebody)
    return (
        <div style = {{marginLeft: 0, width: 200}}>
            <PartnerText getId = {props.getId} setId = {props.setId} getMessage = {props.getMessage} setMessage = {props.setMessage} getMessageHistory = {props.getMessageHistory} setMessageHistory = {props.setMessageHistory} currmessageid = {props.currmessageid} currmessagebody = {props.currmessagebody} >
                {props.currmessagebody}
            </PartnerText>
            
        </div>
    )
}

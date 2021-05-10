import React from 'react'
import MySide from './MySide'
import MyText from './MyText'
import PartnerSide from './PartnerSide'
import PartnerText from './PartnerText'

function TextGround(props) {
    return (
        <div style = {{height: 400, paddingTop: 40,}}>
            {props.getMessageHistory.map(
                    (currmessage, index) => {
                        console.log("Whyyyyyyy"+currmessage)
                        console.log("Huhuh\n" + currmessage.id + "\n"+ props.getId)
                        if (currmessage.id == props.getId) {
                            console.log("Mine!!")
                            return (
                                <MySide getId = {props.getId} setId = {props.setId} getMessage = {props.getMessage} setMessage = {props.setMessage} getMessageHistory = {props.getMessageHistory} setMessageHistory = {props.setMessageHistory} index = {index}  currmessageid = {currmessage.id} currmessagebody = {currmessage.body}/>
                            )
                        } else {
                            return (
                                <PartnerSide getId = {props.getId} setId = {props.setId} getMessage = {props.getMessage} setMessage = {props.setMessage} getMessageHistory = {props.getMessageHistory} setMessageHistory = {props.setMessageHistory} index = {index} currmessageid = {currmessage.id} currmessagebody = {currmessage.body}/>
                            )
                        }
                    }
                )
            }
        </div>
    )
}

export default TextGround



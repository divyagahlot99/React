import React from 'react'

export default function PartnerText(props) {
    return (
        <div style = {{backgroundColor: "#777b87", color: '#FFF', marginTop: 5,marginBottom: 5, marginLeft: -100,  borderBottomLeftRadius: 10, borderBottomRightRadius: 10,borderTopRightRadius: 10,borderTopLeftRadius: 0, padding: 5}}>
            {props.currmessagebody}
        </div>
    )
}

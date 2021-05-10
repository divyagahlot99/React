import React from 'react'

export default function MyText(props) {
    return (
        <div style = {{backgroundColor: "#f38117", marginTop: 5,marginBottom: 5, marginLeft: 20,  borderBottomLeftRadius: 10, borderBottomRightRadius: 10,borderTopRightRadius: 0,borderTopLeftRadius: 10, padding: 5, alignSelf: 'center'}}>
            {props.currmessagebody}
        </div>
    )
}
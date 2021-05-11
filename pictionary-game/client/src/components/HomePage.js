import React from 'react'
import Board from './Board'
import PaintSelector from './PaintSelector'
import { useState } from 'react'

export default function HomePage(props) {
    const name = props.location.state
    console.log("Hiii" + name)
    const [getCurrColor, setCurrColor] = useState("#AAA")
    return (
        <div className="App">
            <Board getCurrColor={getCurrColor} setCurrColor={setCurrColor} name = {name}/>
            <center>
                <PaintSelector getCurrColor={getCurrColor} setCurrColor={setCurrColor} />
            </center>
        </div>
    );
}

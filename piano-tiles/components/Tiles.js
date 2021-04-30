import React from 'react'
import a_3 from "../audio/a_3.mp3"
import a_4 from "../audio/a_4.mp3"
import a_5 from "../audio/a_5.mp3"
import a3 from "../audio/a_3.mp3"
import a4 from "../audio/a4.mp3"
import a5 from "../audio/a5.mp3"
import b3 from "../audio/b3.mp3"
import b4 from "../audio/b4.mp3"
import b5 from "../audio/b5.mp3"
import c_3 from "../audio/c_3.mp3"
import c_4 from "../audio/c_4.mp3"
import c_5 from "../audio/c_5.mp3"
import c3 from "../audio/c3.mp3"
import c4 from "../audio/c4.mp3"
import c5 from "../audio/c5.mp3"
import c6 from "../audio/c6.mp3"
import d_3 from "../audio/d_3.mp3"

function Tiles() {
    const totalItems = 15;
    const items = new Array(totalItems).fill(null);
    function sound(key) {
        let odio = new Audio(key)
        odio.play()
    }
    return(
        <div>
            {/* {items.map((_, idx) => <div class = "white">Tile</div>)}<br/> */}
            <div class = "white" onClick = {() => sound(a_3)}></div>
            <div class = "black" onClick = {() => sound(a_4)}></div>
            <div class = "white" onClick = {() => sound(a_5)}></div>
            <div class = "black" onClick = {() => sound(a3)}></div>
            <div class = "white" onClick = {() => sound(a4)}></div>

            <div class = "white" onClick = {() => sound(a5)}></div>
            <div class = "black" onClick = {() => sound(b3)}></div>
            <div class = "white" onClick = {() => sound(b4)}></div>
            <div class = "black" onClick = {() => sound(b5)}></div>
            <div class = "white" onClick = {() => sound(c_3)}></div>
            <div class = "black" onClick = {() => sound(c_4)}></div>
            <div class = "white" onClick = {() => sound(c_5)}></div>

            <div class = "white" onClick = {() => sound(c3)}></div>
            <div class = "black" onClick = {() => sound(c4)}></div>
            <div class = "white" onClick = {() => sound(c5)}></div>
            <div class = "black" onClick = {() => sound(c6)}></div>
            <div class = "white" onClick = {() => sound(d_3)}></div>
        </div>
    )
}

export default Tiles;

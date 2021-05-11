import '../App.css';
import {useEffect, useState} from 'react'
import io from 'socket.io-client';

export default function Board(props) {
    var ctx;
    var canvas;
    const [getOnlineUsers, setOnlineUsers] = useState([])
    


    function drawOnCanvas() {
        var socket = io.connect("/");
    
        socket.emit("my id", props.name)
        socket.on("canvas-data", function(data){
            var image = new Image();
            canvas = document.querySelector('#boardCanvas');
            ctx = canvas.getContext('2d');
            image.onload = function() {
                ctx.drawImage(image, 0, 0);
            };
            image.src = data;
        })

        socket.on("onlinePlayers", function(data) {
            console.log("what even")
            console.log("bankrupt"+data)
            setOnlineUsers(data)
        })


        canvas = document.querySelector('#boardCanvas');
        ctx = canvas.getContext('2d');
        canvas.width = parseInt("900px");
        canvas.height = parseInt("600px");

        var mouse = {x: 0, y: 0};
        var last_mouse = {x: 0, y: 0};

        /* Mouse Capturing Work */
        canvas.addEventListener('mousemove', function(e) {
            last_mouse.x = mouse.x;
            last_mouse.y = mouse.y;

            mouse.x = e.pageX - this.offsetLeft;
            mouse.y = e.pageY - this.offsetTop;
        }, false);


        /* Drawing on Paint App */
        ctx.lineWidth = 5;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.strokeStyle = props.getCurrColor;

        canvas.addEventListener('mousedown', function(e) {
            canvas.addEventListener('mousemove', onPaint, false);
        }, false);

        canvas.addEventListener('mouseup', function() {
            canvas.removeEventListener('mousemove', onPaint, false);
        }, false);

    
        var onPaint = function() {
            // console.log(1)
            ctx.beginPath();
            ctx.moveTo(last_mouse.x, last_mouse.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.closePath();
            ctx.stroke();
            var base64ImageData = canvas.toDataURL("image/png");
            socket.emit("canvas-data", base64ImageData);
        };
    }

    useEffect(() => {
        
        drawOnCanvas();
    }, []);



    function colorChange(color) {
        ctx.strokeStyle = color;
    }

    


    return (
        <div>
            <h2>PICTIONARY</h2>
            <div className = "sketch" id = "sketch">
                <canvas className = "boardCanvas" id = "boardCanvas"></canvas>
            </div>
            <br/>
            <br/>
            <center>
                <div className = "paintBox">
                    <span className = "colors" style = {{backgroundColor: "#C0392B"}} onClick = {() => colorChange("#C0392B")}></span>
                    <span className = "colors" style = {{backgroundColor: "#E74C3C"}} onClick = {() => colorChange("#E74C3C")}></span>
                    <span className = "colors" style = {{backgroundColor: "#9B59B6"}} onClick = {() => colorChange("#9B59B6")}></span>
                    <span className = "colors" style = {{backgroundColor: "#8E44AD"}} onClick = {() => colorChange("#8E44AD")}></span>
                    <span className = "colors" style = {{backgroundColor: "#2471A3"}} onClick = {() => colorChange("#2471A3")}></span>
                    <span className = "colors" style = {{backgroundColor: "#3498DB"}} onClick = {() => colorChange("#3498DB")}></span>
                    <span className = "colors" style = {{backgroundColor: "#1ABC9C"}} onClick = {() => colorChange("#1ABC9C")}></span>
                    <span className = "colors" style = {{backgroundColor: "#16A085"}} onClick = {() => colorChange("#16A085")}></span>
                    <span className = "colors" style = {{backgroundColor: "#27AE60"}} onClick = {() => colorChange("#27AE60")}></span>
                    <span className = "colors" style = {{backgroundColor: "#2ECC71"}} onClick = {() => colorChange("#2ECC71")}></span>

                    <span className = "colors" style = {{backgroundColor: "#F1C40F"}} onClick = {() => colorChange("#F1C40F")}></span>
                    <span className = "colors" style = {{backgroundColor: "#F39C12"}} onClick = {() => colorChange("#F39C12")}></span>
                    <span className = "colors" style = {{backgroundColor: "#E67E22"}} onClick = {() => colorChange("#E67E22")}></span>
                    <span className = "colors" style = {{backgroundColor: "#D35400"}} onClick = {() => colorChange("#D35400")}></span>
                    <span className = "colors" style = {{backgroundColor: "#ECF0F1"}} onClick = {() => colorChange("#ECF0F1")}></span>
                    <span className = "colors" style = {{backgroundColor: "#BDC3C7"}} onClick = {() => colorChange("#BDC3C7")}></span>
                    <span className = "colors" style = {{backgroundColor: "#95A5A6"}} onClick = {() => colorChange("#95A5A6")}></span>
                    <span className = "colors" style = {{backgroundColor: "#7F8C8D"}} onClick = {() => colorChange("#7F8C8D")}></span>
                    <span className = "colors" style = {{backgroundColor: "#34495E"}} onClick = {() => colorChange("#34495E")}></span>
                    <span className = "colors" style = {{backgroundColor: "#2C3E50"}} onClick = {() => colorChange("#2C3E50")}></span>
                </div>
            </center>
            <div className = "onlinePlayers">
                Online Players
            </div>
        </div>
    )
}

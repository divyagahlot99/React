import React from 'react'

function Timer(props) {
    function reset() {
        props.setArray([1,2,3,4,5,6,7,8,9])
        props.setRand(7) 
        props.setCurrSum(0) 
        props.setColor([0,0,0,0,0,0,0,0,0])
        props.setTimer(10)
    }
    var timeup = ""
    function countdown() {
        for (let i = 0; i < 10 ; i ++) {
            setTimeout(function(){
                if (props.getTimer > 0) {
                    props.setTimer(props.getTimer-1)
                }
                if (props.getTimer == 0) {
                    timeup = "TIME UP"
                    alert("Time's up!")
                }
            }, 1000); 
        }

    }
    countdown()
    return(
        <div>
            {timeup}
            TIME REMAINING: {props.getTimer}<br/>
            <button onClick = {reset}>RESET</button>
        </div>
    )
}

export default Timer;
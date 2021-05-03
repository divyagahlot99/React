import React from 'react'
import logo from '../img/star.jpeg'

function Stars(props) {
    const randomChoice = array => {
		const randIndex = Math.floor(Math.random() * array.length);
		return array[randIndex];
	};
    const totalItems = props.getRand;
    const items = new Array(totalItems).fill(null);
    
    return(
        <div>
            <br/>
            STARS<br/>
            {items.map((_, idx) => <img className = "starimg" src={logo} alt="Logo" />)}<br/>
            Try to make: {props.getRand}<br/>
            {props.getColor}<br/>
            {props.getArray}<br/>
            CurrSum: {props.getCurrSum}
        </div>
    ) 
}

export default Stars;
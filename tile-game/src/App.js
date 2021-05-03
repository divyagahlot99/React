import logo from './logo.svg';
import './App.css';
import TileLayout from './components/TileLayout'
import Stars from './components/Stars'
import {useState} from 'react'
import Timer from './components/Timer'

function App() {
	const randomChoice = array => {
		const randIndex = Math.floor(Math.random() * array.length);
		return array[randIndex];
	};
	const [getArray, setArray] = useState([1,2,3,4,5,6,7,8,9]);
	const [getRand, setRand] = useState(7);
	const [getCurrSum, setCurrSum] = useState(0);
	const [getColor, setColor] = useState([0,0,0,0,0,0,0,0,0]);
	const [getTimer, setTimer] = useState(35);
	console.log("YOU NEED TO MAKE ", getRand);
	return (
		<div className="App">
			<TileLayout getArray = {getArray} setArray = {setArray} getRand = {getRand} setRand = {setRand} getCurrSum = {getCurrSum} setCurrSum = {setCurrSum} getColor = {getColor} setColor = {setColor}/>
			<Stars getArray = {getArray} setArray = {setArray} getRand = {getRand} setRand = {setRand} getCurrSum = {getCurrSum} setCurrSum = {setCurrSum} setColor = {setColor} getColor = {getColor}/>
			<Timer getTimer = {getTimer} setTimer = {setTimer} getArray = {getArray} setArray = {setArray} getRand = {getRand} setRand = {setRand} getCurrSum = {getCurrSum} setCurrSum = {setCurrSum} setColor = {setColor} getColor = {getColor}/>
		</div>
	);
}

export default App;

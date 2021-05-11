import './App.css';
import PaintSelector from './components/PaintSelector'
import Board from './components/Board'
import CanvasDraw from 'react-canvas-draw'
import { useState } from 'react'
import Register from './components/Register';
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom';
import HomePage from './components/HomePage';

function App() {
    const [getUsers, setUsers] = useState(["rooo"]);
    return (
        // <div className="App">
        //     <Board getCurrColor={getCurrColor} setCurrColor={setCurrColor} />
        //     <center>
        //         <PaintSelector getCurrColor={getCurrColor} setCurrColor={setCurrColor} />
        //     </center>
        // </div>
        // <div>
        //     <Register className = "register"/>
        // </div>
        <Router>
                <Route exact path="/" component={Register} getUsers = {getUsers} setUsers = {setUsers}/>
                <Route path="/pictionary" component={HomePage} getUsers = {getUsers} setUsers = {setUsers} />
        </Router>
    );
}

export default App;

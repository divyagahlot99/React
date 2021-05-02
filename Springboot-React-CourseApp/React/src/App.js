import './App.css';
import {useState} from 'react'
import Sidebar from './components/Sidebar'
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';

function App() {
    const [getState, setState] = useState([]);

    return (
        <div className="App">
            <BrowserRouter>
                <Sidebar getState = {getState} setState = {setState}/>
            </BrowserRouter>
            
        </div>
    );
}

export default App;

import './App.css';
import {useState, useRef, useEffect} from 'react'
import TextGround from './components/TextGround'
import io from "socket.io-client";
import styled from "styled-components";

const TextArea = styled.textarea`
  border-radius: 10px;
  backgroundColor: grey;
  width: 98%;
  height: 100px;
  margin-top: 10px;
  padding-left: 10px;
  padding-top: 10px;
  font-size: 17px;
  letter-spacing: 1px;
  ::placeholder {
    color: lightgray;
  }
`;

const Button = styled.button`
  border-radius: 15px;
  background-color: black;
  width: 100%;
  border: none;
  height: 50px;
  color: #FFF;
  font-size: 17px;
`;

const Form = styled.form`
  width: 400px;
`;

function App() {
    const [getId, setId] = useState();
    const [getMessage, setMessage] = useState("");
    const [getMessageHistory, setMessageHistory] = useState([]);
    const socketRef = useRef();

    useEffect(() => {
        console.log("hiii")
        socketRef.current = io.connect('/');
        console.log("yooo")
        socketRef.current.on("your id", id => {
                setId(id);
                console.log("Hii"+id)
            }
        )
        socketRef.current.on("message", (message) => {
            console.log("here");
            console.log(message)
            receivedMessage(message);
        })
    }, []);

    function receivedMessage(message) {
        setMessageHistory(oldMsgs => [...oldMsgs, message]);
    }


    function sendMessage(e) {
        e.preventDefault();
        const messageObject = {
            body: getMessage,
            id: getId,
        };
        setMessage("");
        socketRef.current.emit("send message", messageObject);
    }

    function handleChange(e) {
        setMessage(e.target.value);
    }
    return (
        <div className="App" style = {{height: "100vh",backgroundColor: "#2d2d35", paddingTop: 100}}>
            <center>
                <div style = {{height: 700, width: 500, backgroundColor: "#2d2d35",  borderStyle: 'solid', paddingTop: 100}}>
                <TextGround getId = {getId} setId = {setId} getMessage = {getMessage} setMessage = {setMessage} getMessageHistory = {getMessageHistory} setMessageHistory = {setMessageHistory}/>
                <Form onSubmit={sendMessage}>
                    <TextArea value={getMessage} onChange={handleChange}/>
                    <Button>Send</Button>
                </Form>
                </div>
            </center>
        </div>
    );
}

export default App;

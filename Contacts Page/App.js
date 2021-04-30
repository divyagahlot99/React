import React, { Component }from 'react';
import {useState} from 'react'
import './App.css';
import ContactList from './components/ContactList'
import AddContactForm from './components/AddContactForm'

function App () {
	const [getState, setState] = useState([{"Name": "Divya", "PhoneNo": "9988776655"}, {"Name": "Akshay", "PhoneNo": "9988776653"}, {"Name": "Muskan", "PhoneNo": "0088776655"}])
	return (
		<div>
			<AddContactForm getState = {getState} setState = {setState}/><br/>
			<ContactList getState = {getState} setState = {setState}/>
		</div>
	);
}


export default App;

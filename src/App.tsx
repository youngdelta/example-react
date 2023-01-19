import React, { ChangeEventHandler, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './home';
import { Switch, Route } from 'react-router-dom';
import AotherScreen from './AotherScreen';
import Greeting from './Greeting';
import { validateHeaderValue } from 'http';
import OnClick from './../../ch01_5/src/pages/OnClick';

function Btn(props: any) {
	console.log(props);

	return (
		<button
			onClick={/* props.changeValue */ props.onClick}
			style={{ backgroundColor: 'tomato', color: 'white', padding: '10px 20px', border: 0, borderRadius: 10 }}>
			{props.text}
		</button>
	);
}

function SaveButton() {
	return <button>Save Changes</button>;
}

function ConfirmButton() {
	return <button style={{ backgroundColor: 'tomato', color: 'white', padding: '10px 20px', border: 0, borderRadius: 10 }}>Confirm</button>;
}

const MemorizedBtn = React.memo(Btn);

function App() {
	const [value1, setValue1] = useState('Save Changes');

	const changeValue = () => {
		return setValue1('Revert Changes : ' + Math.floor(1 + Math.random() * 10));
	};

	/* 
	const [enteredName, setEnteredName] = useState('no name');

	const onChangeName = (event: any) => {
		setEnteredName(event.target.value);
	};
 */

	return (
		<div className="App">
			{/* 
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<Greeting />
				<Greeting name="Dave surinam!" />
				<form action="">
					<label htmlFor="name">Name</label>
					<input id="name" type="text" value={enteredName} onChange={onChangeName} />
				</form>
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
			</header>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/aother" component={AotherScreen} />
			</Switch>
			 */}
			{/* <Home /> */}

			<Btn banana="fruit" text={value1} /* changeValue={changeValue} */ onClick={changeValue} />
			<Btn text="button1" />
			<MemorizedBtn text="Continue" />

			<SaveButton />
			<ConfirmButton />
		</div>
	);
}

export default App;

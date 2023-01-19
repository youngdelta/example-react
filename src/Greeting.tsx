import React from 'react';

interface GreetingProps {
	name?: string;
}

interface GreetingState {
	message: string;
}

export default class Greeting extends React.Component<GreetingProps, GreetingState> {
	constructor(props: GreetingProps) {
		super(props);

		this.state = {
			message: `Hello from, ${props.name}!`,
		};
	}

	static getDerivedStateFromProps(props: GreetingProps, state: GreetingState): GreetingState {
		console.log(props, state);
		return state;
	}

	render() {
		console.log('rendering... Greeting');

		if (!this.props.name) {
			return (
				<div>
					<h1>no name given</h1>
				</div>
			);
		}
		return (
			<div>
				<h1>{this.state.message}</h1>
			</div>
		);
	}
}

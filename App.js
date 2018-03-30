import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import LazyRoute from "lazy-route";
import DevTools from "mobx-react-devtools";

@withRouter
export default class App extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="wrapper">
				{/*<DevTools />*/}

				<Route
					exact
					path="/"
					render={props => (
						<LazyRoute {...props} component={import("./Home")} />
					)}
				/>
			</div>
		);
	}
}

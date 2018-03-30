import React, { Component } from "react";
import { inject, observer } from "mobx-react";

import Card from "./Card";
import Navbar from "./Navbar";
import Search from './Search';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store;
	}

	render() {
		const store = this.store;
		return (
			<div className="page home">
				<header>
					<Navbar />
				</header>
				<main className="container">
					<Card backgroundColor="orange"
					 			textColor="black"
								title="Let’s find your ideal car">

						<Search />
					</Card>
				</main>
			</div>
		);
	}
}

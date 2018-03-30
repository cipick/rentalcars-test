import React, { Component } from "react";

export default class Card extends Component {
	render() {
    const children = this.props.children;
    const backgroundColor = this.props.backgroundColor || 'white';
    const textColor = this.props.textColor || 'black';
    const title = this.props.title;

		return (
			<div className={`card ${backgroundColor}`}>
        <div className={`card-content ${textColor}-text`}>
          <span className="card-title">{title}</span>
          {children}
        </div>
      </div>
		);
	}
}

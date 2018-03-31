import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    const title = "Rentalcars.com test";

    return (
      <nav className="nav">
        <div className="nav-wrapper container">
          <a href="#" className="brand-logo">{title}</a>
        </div>
      </nav>
    )
  }
}

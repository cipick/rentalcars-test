import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    const title = "Rentalcars.com test";
    
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">{title}</a>
        </div>
      </nav>
    )
  }
}

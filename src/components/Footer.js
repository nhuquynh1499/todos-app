import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <div className="Footer" onClick={onClick}>
        <img className="" src="https://cdn.glitch.com/e41838d3-90fc-48cf-a257-5d476d13e374%2Fadd.svg?v=1592046561907" />
      </div>
    )
  }
}

export default Footer
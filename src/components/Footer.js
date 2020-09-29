import React, { Component } from 'react';
import './Footer.css';
import AddIcon from '../assets/add.svg'

class Footer extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <div className="Footer" onClick={onClick}>
        <img src={AddIcon} alt=""/>
      </div>
    )
  }
}

export default Footer
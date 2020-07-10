import React, { Component } from 'react';
import './Footer.css';
import AddIcon from '../images/add.svg'

class Footer extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <div className="Footer" onClick={onClick}>
        <img src={AddIcon}/>
      </div>
    )
  }
}

export default Footer
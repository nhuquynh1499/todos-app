import React, { Component } from 'react';
import classNames from 'classnames';
import './ToDoItem.css';

class ToDoItem extends Component {
  render() {
    const { item, index, onClick } = this.props;
    return (
      <div className={classNames('ToDoItem', {
        'ToDoItem-done': item.isComplete === true
      })} onClick={onClick} >
        <span className="stt">{parseInt(index) + 1}.</span>
        <span>{item.content}</span>
      </div>
    );
  }
}

export default ToDoItem;
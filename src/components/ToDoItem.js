import React, { Component } from "react";
import classNames from "classnames";
import "./ToDoItem.css";
import IconEdit from "../images/edit.svg";
import IconEditDone from "../images/edit-done.svg";

class ToDoItem extends Component {
  render() {
    const {
      item,
      index,
      onClick,
      onShowEditInput,
      onEditClick,
      onChange,
    } = this.props;
    return (
      <div
        className={classNames("ToDoItem", {
          "ToDoItem-done": item.isComplete === true,
        })}
      >
        <span className="stt">{parseInt(index) + 1}.</span>
        <div className="showContent">
          <span className="itemContent" onClick={onClick}>
            {item.content}
          </span>
          <div className="editContent">
            <input
              name="editItem"
              className="inputContent"
              defaultValue={item.content}
              onChange={onChange}
            />
            <button className="btn-edit" onClick={onEditClick}>
              Go
            </button>
          </div>
        </div>
        <div onClick={onShowEditInput}>
          { !item.isComplete && <img src={IconEdit} alt="" /> }
          { item.isComplete && <img src={IconEditDone} alt="" /> }
        </div>
      </div>
    );
  }
}

export default ToDoItem;

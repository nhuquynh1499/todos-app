import React, { Component } from "react";
import classNames from "classnames";
import "./ToDoItem.css";
import IconEdit from "../images/edit.svg";
import IconEditDone from "../images/edit-done.svg";
import IconDelete from "../images/delete.svg";

class ToDoItem extends Component {
  render() {
    const {
      item,
      idNow,
      index,
      onClick,
      onShowEditInput,
      onKeyUp,
      onChange,
      isActive,
      onDeleteItem,
    } = this.props;
    console.log(isActive);
    return (
      <div
        className={classNames("ToDoItem", {
          "ToDoItem-done": item.isComplete === true,
        })}
      >
        <span className="stt">{parseInt(index) + 1}.</span>
        <div className="showContent">
          {isActive !== item.id && (
            <span className="itemContent" onClick={onClick}>
              {item.content}
            </span>
          )}
          <div
            className={classNames("editContent", {
              showEditContent: idNow === item.id,
            })}
          >
            <input
              name="editItem"
              className="inputContent"
              defaultValue={item.content}
              onChange={onChange}
              id={item.id}
              autoFocus
              onKeyUp={onKeyUp}
            />
            {/* <button className="btn-edit" onClick={onEditClick}>
              Go
            </button> */}
          </div>
        </div>
        <div onClick={onShowEditInput}>
          {!item.isComplete && <img src={IconEdit} alt="" />}
          {item.isComplete && <img src={IconEditDone} alt="" />}
        </div>
        <div onClick={onDeleteItem}>
          <img src={IconDelete} alt="" />
        </div>
      </div>
    );
  }
}

export default ToDoItem;

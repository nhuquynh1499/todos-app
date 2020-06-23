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
      showEdit,
      index,
      onClick,
      onShowEditInput,
      onEditClick,
      onChange,
      onDeleteItem
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
          <div 
            className={classNames("editContent", {
              "showEditContent": showEdit === item.id
            })}
          >
            <input
              name="editItem"
              className="inputContent"
              defaultValue={item.content}
              onChange={onChange}
              id={item.id}
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
        <div onClick={onDeleteItem}>
          <img src={IconDelete} />
        </div>
      </div>
    );
  }
}

export default ToDoItem;

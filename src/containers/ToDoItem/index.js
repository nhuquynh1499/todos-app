import React, { Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./style.css";
import InputToDo from "../InputEdit";
import IconEdit from "../../assets/edit.svg";
import IconEditDone from "../../assets/edit-done.svg";
import IconDelete from "../../assets/delete.svg";
import { setActiveId } from "../../redux/actions";

function ToDoItem(props) {
  const activeId = useSelector((state) => state.todos.activeId);
  const dispatch = useDispatch();

  const {
    item,
    index,
    onClick,
    onDeleteItem,
  } = props;

  const handleActiveIdClick = (id) => {
    dispatch(setActiveId(id));
  } 

  return (
    <div className={item.isComplete ? "ToDoItem ToDoItem-done" : "ToDoItem"}>
      <span className="stt">{parseInt(index) + 1}.</span>
      <div className="showContent">
        {activeId !== item.id && (
          <span className="itemContent" onClick={onClick}>
            {item.content}
          </span>
        )}
        {activeId === item.id && <InputToDo item={item}/>}
      </div>
      <div onClick={() => handleActiveIdClick(item.id)}>
        {!item.isComplete && <img src={IconEdit} alt="" />}
        {item.isComplete && <img src={IconEditDone} alt="" />}
      </div>
      <div onClick={onDeleteItem}>
        <img src={IconDelete} alt="" />
      </div>
    </div>
  );
}

export default ToDoItem;

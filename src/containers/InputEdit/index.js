import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editToDo, setActiveId } from "../../redux/actions";
import "./style.css";

export default function InputToDo(props) {
  const { item } = props;
  const [value, setValue] = useState("");

  const activeId = useSelector((state) => state.todos.activeId);

  const dispatch = useDispatch();

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onKeyUp = (event) => {
    if (event.keyCode === 13) {
      dispatch(editToDo(activeId, value));
      dispatch(setActiveId(null));
    }
  };

  return (
    <div className="InputEdit">
      <input
        name="editItem"
        className="inputContent"
        defaultValue={item.content}
        onChange={onChange}
        id={item.id}
        autoFocus
        onKeyUp={onKeyUp}
      />
    </div>
  );
}

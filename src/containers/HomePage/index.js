import React, { useEffect } from "react";
import shortid from "shortid";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Nolist from "../../components/Nolist";
import ToDoItem from "../ToDoItem";
import { useSelector, useDispatch } from "react-redux";
import { addToDo, removeToDo, updateToDo } from "../../redux/actions";
import './style.css';

export default function ToDo(props) {
  const todoList = useSelector((state) => state.todos.list);
  const activeId = useSelector((state) => state.todos.activeId);

  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  const handleAddItemClick = () => {
    const idItem = shortid.generate();
    const newItem = {
      id: idItem,
      content: "New item",
      isComplete: false,
    };

    dispatch(addToDo(newItem));
  };

  const handleDeleteItemClick = (itemId) => {
    const action = removeToDo(itemId);
    dispatch(action);
  };

  const handleItemClicked = (itemId) => {
    const action = updateToDo(itemId);
    dispatch(action);
  };

  return (
    <div className="ToDo">
      <Header />
      <div className="Content">
        {todoList.length === 0 && <Nolist />}
        {todoList.length > 0 && (
          <div className="hasContent">
            <div className="List Upcoming">
              <p>Upcoming</p>
              {todoList.map((item, index) => {
                if (!item.isComplete)
                  return (
                    <ToDoItem
                      item={item}
                      activeId={activeId}
                      index={index}
                      key={item.id}
                      onClick={() => handleItemClicked(item.id)}
                      onDeleteItem={() => handleDeleteItemClick(item.id)}
                    />
                  );
              })}
            </div>
            <div className="List Finished">
              <p>Finished</p>
              {todoList.map((item, index) => {
                if (item.isComplete)
                  return (
                    <ToDoItem
                      item={item}
                      activeId={activeId}
                      index={index}
                      key={item.id}
                      onClick={() => handleItemClicked(item.id)}
                      onDeleteItem={() => handleDeleteItemClick(item.id)}
                    />
                  );
              })}
            </div>
          </div>
        )}
      </div>
      <Footer onClick={handleAddItemClick} />
    </div>
  );
}

import React, { Component } from "react";
import shortid from "shortid";
import "./App.css";
import ToDoItem from "./components/ToDoItem";
import Footer from "./components/Footer";
import Header from "./components/Header";
import IconBackground from "./images/background.svg";

class App extends Component {
  constructor() {
    super();
    this.state = {
      newItem: "",
      editItem: "",
      isActive: "",
      idNow: "abc",
      todos: localStorage.getItem("todos")
        ? JSON.parse(localStorage.getItem("todos"))
        : [],
      // todos: [
      //   { content: "Go to market", isComplete: true },
      //   { content: "Buy to food", isComplete: false },
      //   { content: "Make dinner", isComplete: false },
      // ],
    };

    // this.onAddClicked = this.onAddClicked.bind(this);
    // this.onChange = this.onChange.bind(this);
  }

  onItemClicked = (item) => {
    return (event) => {
      const isComplete = item.isComplete;
      const { todos } = this.state;
      const index = todos.indexOf(item);
      this.setState(
        {
          todos: [
            ...todos.slice(0, index),
            {
              ...item,
              isComplete: !isComplete,
            },
            ...todos.slice(index + 1),
          ],
        },
        () => {
          localStorage.setItem("todos", JSON.stringify(this.state.todos));
        }
      );
    };
  };

  onAddClicked = () => {
    const idItem = shortid.generate();
    const newItem = {
      id: idItem,
      content: "New item",
      isComplete: false,
    };
    this.setState(
      {
        todos: [...this.state.todos, newItem],
        idNow: idItem,
      },
      () => {
        localStorage.setItem("todos", JSON.stringify(this.state.todos));
        this.onShowEditInput(newItem.id);
      }
    );
  };

  onShowEditInput = (id) => {
    const { todos } = this.state;
    const editItem = todos.find((item) => {
      return item.id === id;
    });
    return (event) => {
      this.setState(
        {
          editItem: editItem.content,
          idNow: id,
          isActive: id,
        },
        () => {
          const inputContent = document.getElementById(id);
          console.log(inputContent);
          inputContent.focus();
        }
      );
    };
  };

  onKeyUp = (event) => {
    if (event.keyCode === 13) {
      const { todos } = this.state;
      const editItem = todos.find((item) => {
        return item.id === this.state.idNow;
      });
      editItem.content = this.state.editItem
        ? this.state.editItem
        : editItem.content;
      this.setState({
        editItem: "",
        idNow: "",
      });
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }
  };

  onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  onDeleteItem = (item) => {
    return (event) => {
      const { todos } = this.state;
      const index = todos.indexOf(item);
      this.setState(
        {
          todos: [...todos.slice(0, index), ...todos.slice(index + 1)],
        },
        () => {
          localStorage.setItem("todos", JSON.stringify(this.state.todos));
        }
      );
    };
  };

  render() {
    const { todos, idNow, isActive } = this.state;
    return (
      <div className="App">
        <Header />
        <div className="Content">
          {todos.length === 0 && (
            <div className="noContent">
              <div>
                <span className="notification">You have no list</span>
              </div>
              <img className="icon" src={IconBackground} alt="" />
            </div>
          )}
          {todos.length > 0 && (
            <div className="hasContent">
              <div className="List Upcoming">
                <p>Upcoming</p>
                {todos.map((item, index) => {
                  if (!item.isComplete)
                    return (
                      <ToDoItem
                        item={item}
                        idNow={idNow}
                        index={index}
                        key={item.id}
                        isActive={isActive}
                        onClick={this.onItemClicked(item)}
                        onShowEditInput={this.onShowEditInput(item.id)}
                        onKeyUp={this.onKeyUp}
                        onChange={this.onChange}
                        onDeleteItem={this.onDeleteItem(item)}
                      />
                    );
                })}
              </div>
              <div className="List Finished">
                <p>Finished</p>
                {todos.map((item, index) => {
                  if (item.isComplete)
                    return (
                      <ToDoItem
                        item={item}
                        idNow={idNow}
                        index={index}
                        key={item.id}
                        onClick={this.onItemClicked(item)}
                        onShowEditInput={this.onShowEditInput(item.id)}
                        onKeyUp={this.onKeyUp}
                        onChange={this.onChange}
                        onDeleteItem={this.onDeleteItem(item)}
                      />
                    );
                })}
              </div>
            </div>
          )}
        </div>
        <Footer onClick={this.onAddClicked} />
      </div>
    );
  }
}

export default App;

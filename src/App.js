import React, { Component } from "react";
//import logo from './logo.svg';
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
      todos: [
        { content: "Go to market", isComplete: true },
        { content: "Buy to food", isComplete: false },
        { content: "Make dinner", isComplete: false },
      ],
    };

    // this.onAddClicked = this.onAddClicked.bind(this);
    // this.onChange = this.onChange.bind(this);
  }

  onItemClicked = (item) => {
    return (event) => {
      const isComplete = item.isComplete;
      const { todos } = this.state;
      const index = todos.indexOf(item);
      this.setState({
        todos: [
          ...todos.slice(0, index),
          {
            ...item,
            isComplete: !isComplete,
          },
          ...todos.slice(index + 1),
        ],
      });
    };
  };

  onAddClicked = () => {
    this.setState({
      todos: [
        ...this.state.todos,
        { content: 'New item', isComplete: false },
      ]
    })
  };

  onShowEditInput = (item) => { 
    return (event) => {
      console.log(item);
      const inputContent = document.getElementsByClassName("inputContent");
      const editContent = document.getElementsByClassName("editContent");
      
      for (let i = 0; i < inputContent.length; i++) {
        if (inputContent[i].defaultValue === item.content) {
          editContent[i].setAttribute("class", "editContent showEditContent");
          inputContent[i].focus();
        }
      }

      this.setState({
        editItem: item.content
      })
    };
  };

  onEditClick = (item) => {
    return (event) => {
      const inputContent = document.getElementsByClassName("inputContent");
      const editContent = document.getElementsByClassName("editContent");
      
      for (let i = 0; i < inputContent.length; i++) {
        if (inputContent[i].defaultValue === item.content) {
          editContent[i].setAttribute("class", "editContent");
        }
      }
      item.content = this.state.editItem;
      this.setState({
        editItem: ''
      })
      console.log(this.state.todos)
    };
  };

  onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { todos } = this.state;
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
                        index={index}
                        key={index}
                        onClick={this.onItemClicked(item)}
                        onShowEditInput={this.onShowEditInput(item)}
                        onEditClick={this.onEditClick(item)}
                        onChange={this.onChange}
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
                        index={index}
                        key={index}
                        onClick={this.onItemClicked(item)}
                        onShowEditInput={this.onShowEditInput(item)}
                        onEditClick={this.onEditClick(item)}
                        onChange={this.onChange}
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

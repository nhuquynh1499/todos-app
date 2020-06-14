import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import ToDoItem from './components/ToDoItem';
import Footer from './components/Footer';
import Header from './components/Header';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newItem: '',
      currentFilter: 'all',
      todos : [
        // { content: 'Go to market', isComplete: true },
        // { content: 'Buy to food', isComplete: false },
        // { content: 'Make dinner', isComplete: false }
      ]
    }

    this.onAddClicked = this.onAddClicked.bind(this);
  };

  onItemClicked(item) {
    return (event) => {
      const isComplete = item.isComplete;
      const { todos } = this.state
      const index = todos.indexOf(item);
      this.setState({
        todos: [
          ...todos.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...todos.slice(index + 1)
        ]
      });
    }
  }

  onAddClicked() {
    console.log('Clicked');
  }

  render() {
    const { todos } = this.state;
    return (
      <div className="App">
        <Header />
        <div className="Content">
          {
            todos.length === 0 && (
              <div className="noContent">
                <div>
                  <span className="notification">You have no list</span>
                </div>
                <img className="icon" src="https://cdn.glitch.com/e41838d3-90fc-48cf-a257-5d476d13e374%2Fundraw_happy_music_g6wc.svg?v=1592046042172" />
              </div>
            )
          }
          {
            todos.length > 0 && (todos.map((item, index) => {
              return <ToDoItem item={item} index={index} key={index} onClick={this.onItemClicked(item)} />
            }))
          }
        </div>
        <Footer onClick={this.onAddClicked}/>
      </div>
    );
  };
}

export default App;

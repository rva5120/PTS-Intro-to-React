import React, { Component } from 'react';
import Annie from '../assets/Annie_Sniffs.gif';
import List from '../components/List/index.js';
import Form from '../components/Form/index.js';
import './App.css';

class App extends Component {
  state = {
    list: []
  };
  handleItemAdded = (item) => {
    console.log('The form was submitted');
    const currentList = [
      ...this.state.list,
      item
    ];
    this.setState({
      list: currentList
    });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={Annie} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="Container">
          <List list={this.state.list} />
          <Form handleItemAdded={this.handleItemAdded} />
        </div>
      </div>
    );
  }
}

export default App;

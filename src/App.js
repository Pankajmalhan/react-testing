import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  incrementCount = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    return <div data-test='component-app'>
      <h1 data-test='counter-view'>Counter Value Is: {this.state.counter}</h1>
      <button data-test='counter-button' onClick={this.incrementCount}>Increment Value</button>
    </div>
  }
}

export default App;

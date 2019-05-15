import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      showError: false
    }
  }

  incrementCount = () => {
    this.setState({
      counter: this.state.counter + 1,
      showError:false
    })
  }
  decrementCount = () => {
    if (this.state.counter == 0) {
      this.setState({
        showError: true
      })
    } else {
      this.setState({
        counter: this.state.counter - 1
      })
    }
  }

  render() {
    return <div data-test='component-app'>
      <h1 data-test='counter-view'>Counter Value Is: {this.state.counter}</h1>
      {this.state.showError && <h2 data-test='test-error-view' style={{ color: 'red', fontSize: 18 }}>Couter value can not be less than 0</h2>}
      <button data-test='counter-button' onClick={this.incrementCount}>Increment Value</button>
      <button data-test='decrement-counter-button' onClick={this.decrementCount}>Decrement Value</button>
    </div>
  }
}

export default App;

import React, { Component } from 'react';

import Counter from '../components/Counter.js';

export default class CounterPage extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    counter: 0
  }

  handleIncrement = (e) => {
    e.preventDefault();

    this.setState({
      counter: this.state.counter + 1
    });
  }

  handleDecrement = (e) => {
    e.preventDefault();

    this.setState({
      counter: this.state.counter - 1
    });
  }

  render() {
    return (
      <div className='full-size'>
        <Counter 
          counter={this.state.counter}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement} />
      </div>
    );
  }
}

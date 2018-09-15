import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

class Counter extends React.Component {
  state = {
    count: 0
  };

  handleDec = () => {
    this.setState(({ count }) => ({
      count: count - 1
    }));
  };

  handleInc = () => {
    this.setState(({ count }) => ({
      count: count + 1
    }));
  };

  render() {
    return (
      <div>
        Count: {this.state.count}
        <div>
          <button onClick={this.handleDec}>-</button>
          <button onClick={this.handleInc}>+</button>
        </div>
      </div>
    );
  }
}

export default Counter;

import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };

    this.handleDec = this.handleDec.bind(this);
    this.handleInc = this.handleInc.bind(this);
  }

  handleDec() {
    this.setState(({ count }) => ({
      count: count - 1
    }));
  }

  handleInc() {
    this.setState(({ count }) => ({
      count: count + 1
    }));
  }

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

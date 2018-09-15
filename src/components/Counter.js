import React from 'react';
import { observer } from 'mobx-react';

@observer class Counter extends React.Component {
  handleDec = () => {
    this.props.store.decrement();
  };
  handleInc = () => {
    this.props.store.increment();
  }

  render() {
    return (
      <div>
        Count: {this.props.store.count}
        <div>
          <button onClick={this.handleDec}>-</button>
          <button onClick={this.handleInc}>+</button>
        </div>
      </div>
    );
  }
}

export default Counter;

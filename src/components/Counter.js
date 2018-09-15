import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

@observer class Counter extends React.Component {
  @observable count = 0;

  handleDec = () => {
    
  };

  handleInc = () => {
    
  };

  render() {
    return (
      <div>
        Count: {this.count}
        <div>
          <button onClick={this.handleDec}>-</button>
          <button onClick={this.handleInc}>+</button>
        </div>
      </div>
    );
  }
}

export default Counter;

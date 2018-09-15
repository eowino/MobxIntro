import React from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

@observer
class Temperature extends React.Component {
  @observable unit = '';
  @observable temperature = '';

  @action update = () => {
    this.props.temperatureState.setUnitTemperature(this.unit, this.temperature);
  };

  @action
  handleOnChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    this[name] = value;
  };

  render() {
    return (
      <div>
        <h2>Temperature</h2>
        <div>
          <label htmlFor="temperature">Temperature</label>
          <input
            type="text"
            id="temperature"
            name="temperature"
            value={this.temperature}
            onChange={this.handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="unit">Unit</label>
          <input
            type="text"
            id="unit"
            name="unit"
            value={this.unit}
            onChange={this.handleOnChange}
          />
        </div>
        <button onClick={this.update}>Update val</button>
        <p>{this.props.temperatureState.temperature}</p>
      </div>
    );
  }
}

export default Temperature;

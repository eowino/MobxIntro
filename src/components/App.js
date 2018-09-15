import React from 'react';
import Counter from './Counter';
import CounterState from '../state/Counter';

const App = () => (
  <div>
    <Counter store={CounterState}/>
  </div>
);

export default App;

# MobxIntro

[`@observable`](https://mobx.js.org/refguide/observable.html) - Used to decorate the state. E.g. `@observable count = 0` tells Mobx to track the value of count so that [`@observer`](https://mobx.js.org/refguide/observer-component.html)  can be updated when needed.
By doing so, we trust mobx to keep component rendering consitent with the state.
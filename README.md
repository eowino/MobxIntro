# MobxIntro

[`@observable`](https://mobx.js.org/refguide/observable.html) - Used to decorate the state. E.g. `@observable count = 0` tells Mobx to track the value of count so that [`@observer`](https://mobx.js.org/refguide/observer-component.html)  can be updated when needed.
By doing so, we trust mobx to keep component rendering consitent with the state.

## Principal 1 - @computed
Find the smallest amount of state you need, and derive anything else from that state. As a result, mobx doesn't have to keep track of a lot of values and issue state updates when necessary.

Variables marked with `@computed` tell mobx that the values can be derived from other `@observable`s.
They are very similar to formulas in spreadsheets.

**N.B.** `@computed` properties are not allowed to produce side-effects such as: performing network calls, logging to console, changing state, etc.

*They should be pure functions*

Mobx tries to defer the computation of `@computed` properties until they are needed by side-effects.

In order to make `@computed` values reactive (react to state changes), you must consume them with a 'reaction' such as an `@observer`. 

*'Reactions' don't produce a value, they produce a side-effect*
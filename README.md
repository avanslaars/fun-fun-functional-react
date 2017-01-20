# Experiments with Functional React using Ramda.js and Next.js

Pointless app that uses the [Deck of Cards API](http://deckofcardsapi.com/). It loads a deck of cards on load. That sets the `remaining` and `deckid` values on `state`.

Using a number input and a button, you can choose to draw `n` cards based on the input.

Loading cards sets the `state.cards` value, takes any existing cards from the previous state and adds them to the discard pile. It also resets the `drawCount` and updates the `remaining` value.

* First pass is just using standard calls to `setState`

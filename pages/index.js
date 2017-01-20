import React, {Component} from 'react'
import {invoker, compose, zipObj, values, append, tap, pick, path, objOf} from 'ramda'
import 'isomorphic-fetch'

// This could come from env variable, config file, etc
const GET_DECK_URL = `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`

const log = tap(console.log)

const then = invoker(1, 'then')
const json = then(invoker(0, 'json'))
const getJson = compose(json, fetch)

// Handle loading initial state with fecth and converting into a usable object
// I named state properties different from response properties to make sure this was a covered case
const responseToState = then(compose(zipObj(['deckid', 'remaining', 'isLoading']), append(false), values, pick(['deck_id', 'remaining'])))
const loadInitialState = compose(responseToState, getJson)

// Deal with input
const getNewDrawCount = compose(objOf('drawCount'), path(['target', 'value']))

export default class extends Component {
  state = {
    isLoading: true,
    deckid:'',
    remaining:0,
    drawCount:1,
    cards: [],
    discardPile: []
  }


  // Use composition to get object and pass it to this.setState directly
  async componentDidMount() {
    const res = await loadInitialState(GET_DECK_URL)
    this.setState(res)
  }

  // Setting state from typical event - basically boilerplate for normal inputs
  changeDrawCount = (evt) => {
      const newState = getNewDrawCount(evt)
      this.setState(newState)
  }

  drawCards = async (evt) => {
    const res = await getJson(`https://deckofcardsapi.com/api/deck/${this.state.deckid}/draw/?count=${this.state.drawCount}`)
    // using the function version of setState to reference previous state (and props if needed with 2nd arg)
    this.setState((prevState) => ({cards: res.cards, remaining: res.remaining, discardPile: prevState.discardPile.concat(prevState.cards), drawCount: 1}))
  }

  discard = (code) => {
      const cardIndex = this.state.cards.findIndex(x => x.code === code)
      // Update cards
      const newCards = [...this.state.cards.slice(0, cardIndex), ...this.state.cards.slice(cardIndex+1)]

      // Update discard pile
      const newDiscardPile = this.state.discardPile.concat(this.state.cards[cardIndex])

      this.setState({cards: newCards, discardPile: newDiscardPile})

  }

  render() {
    return (
      <div>
        {this.state.isLoading && <h1>Loading...</h1>}
        <input type='number' value={this.state.drawCount} onChange={this.changeDrawCount} />
        <button onClick={this.drawCards}>Draw Cards</button>
        <label>Remaining Cards in Deck: {this.state.remaining}</label>
        <div>
          <h2>Current Cards</h2>
          {this.state.cards.map(c => <span key={c.code}><img width="200" src={c.images.png}/><button onClick={() => this.discard(c.code)}>discard</button></span>)}
          <h3>Discarded Cards:</h3>
          {this.state.discardPile.map(c => <img key={c.code} width="50" src={c.images.png}/>)}
        </div>
      </div>
    )
  }
}

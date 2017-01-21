import React, {Component} from 'react'
import 'isomorphic-fetch'
import {invoker, compose, zipObj, values, append,
    tap, pick, path, objOf, propEq, findIndex, flip,
    remove, useWith, identity, apply, curryN, partition,
    converge, concat, evolve, uncurryN} from 'ramda'

const then = invoker(1, 'then')
const json = then(invoker(0, 'json'))
const getJson = compose(json, fetch)

// This could come from env variable, config file, etc
const GET_DECK_URL = `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`
const getDrawUrl = (id, count) => `https://deckofcardsapi.com/api/deck/${id}/draw/?count=${count}`
const fetchCards = compose(getJson, getDrawUrl)
const getCards = compose(apply(fetchCards), values, pick(['deckid', 'drawCount']))

const log = tap(console.log)

const removeF = flip(remove)
const removeOne = removeF(1)

// Handle loading initial state with fetch and converting into a usable object
// I named state properties different than response properties to make sure this was a covered case
const responseToState = then(compose(zipObj(['deckid', 'remaining', 'isLoading']), append(false), values, pick(['deck_id', 'remaining'])))
const loadInitialState = compose(responseToState, getJson)

// Deal with input - generic verison of this is basically `linkState`
const getNewDrawCount = compose(objOf('drawCount'), path(['target', 'value']))

const findIndexByCode = useWith(findIndex, [propEq('code'), identity])

export default class extends Component {
  state = {
    isLoading: true,
    deckid:'',
    remaining:0,
    drawCount:5,
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

  drawCards = async () => {
    const res = await getCards(this.state)
    // using the function version of setState to reference previous state (and props if needed with 2nd arg)
    // TODO: find a more functional way...
    const handle = (prevState) => ({
        cards: res.cards,
        remaining: res.remaining,
        discardPile: prevState.discardPile.concat(prevState.cards),
        drawCount: 5
      })
    this.setState(handle)
  }

  discard = (code) => {
    // TODO: get this down to just passing in this.state and code?
    const createPartition = useWith(curryN(2, compose(zipObj(['discardPile', 'cards']),partition)), [propEq('code')])
    const createEvolve = useWith(evolve, [compose(objOf('discardPile'), concat)])
    const createNewState = uncurryN(3, useWith(compose, [createEvolve, createPartition]))
    const newState = createNewState(this.state.discardPile, code, this.state.cards)

    this.setState(newState)

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

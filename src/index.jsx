import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

import Counter, { CounterReducer } from './Counter'

const reducers = combineReducers({
   counter: CounterReducer
}) 

ReactDOM.render(
   <Provider store={createStore(reducers)} >
      <Counter />
   </Provider>
   , document.querySelector('.app')
)
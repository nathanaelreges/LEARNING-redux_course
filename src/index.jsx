import React from 'react'
import ReactDOM from 'react-dom'
import Field from './Field'

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

const reducers = combineReducers({
   field: () => ({value: 'Opa'}) 
})


ReactDOM.render(
   <Provider store={createStore(reducers)} >
      <Field initialValue="Texto" />
   </Provider>
   , document.querySelector('.app')
)


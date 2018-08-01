import React from 'react'
import ReactDOM from 'react-dom'
import Field from './Field2'
import FieldReducer from './FieldReducer'

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'



const reducers = combineReducers({
   field: FieldReducer 
})


ReactDOM.render(
   <Provider store={createStore(reducers)} >
      <Field initialValue="Texto" />
   </Provider>
   , document.querySelector('.app')
)


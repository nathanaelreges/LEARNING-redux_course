import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import reducer from './CounterReducer'
import * as actions from './CounterActions'



class Counter extends React.Component {
   constructor (props) {
      super(props)
      this.handleStepChange = this.handleStepChange.bind(this)
   }

   handleStepChange (e) {
      this.props.onStepChange(e.target.value)
   }

   render() {return (
      <div>
         <h4>{this.props.value}</h4>
         <input type="number" value={this.props.step} onChange={this.handleStepChange} />
         <button onClick={this.props.onInc}>Inc</button>
         <button onClick={this.props.onDec}>Dec</button>
      </div>
   )}
}

const mapStateToProps = ({counter}) => ({value: counter.value, step: counter.step})
const mapDispatchToProps = (dispatch) => (
   bindActionCreators({ 
      onInc: actions.inc,
      onDec: actions.dec,
      onStepChange: actions.stepChange
   }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Counter)

export { reducer as CounterReducer }
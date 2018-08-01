import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeValue } from './FieldActions'


class Field extends Component {
   constructor (props) {
      super(props)

      this.handleChange = this.handleChange.bind(this)
   }

   handleChange (e) {
      const action = changeValue(e)
      this.props.dispatch(action)
   }

   render () {
      return <div>
         <label>{this.props.value}</label> <br/>
         <input onChange={this.handleChange} value={this.props.value || ''}/>
      </div>
   }
}

const mapStateToProps = state => (
   { value: state.field.value }
)

export default connect(mapStateToProps)(Field)
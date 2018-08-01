import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeValue } from './FieldActions'


class Field extends Component {
   render () {
      return <div>
         <label>{this.props.value}</label> <br/>
         <input onChange={this.props.changeValue} value={this.props.value || ''}/>
      </div>
   }
}

const mapStateToProps = state => (
   { value: state.field.value }
)

const mapActionsToProps = dispacth => (
   bindActionCreators({ changeValue }, dispacth)
)

export default connect(mapStateToProps, mapActionsToProps)(Field)
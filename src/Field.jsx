import React, { Component } from 'react'
import { connect } from 'react-redux'


class Field extends Component {
   handleChange (e) {
      this.setState( {value: e.target.value} )
   }
   
   render () {
      return <div>
         <label>{this.props.value}</label> <br/>
         <input onChange={this.handleChange} value={this.props.value || ''}/>
      </div>
   }
}

const mapStateToProps = state => (
   {value: state.field.value}
)

export default connect(mapStateToProps)(Field)
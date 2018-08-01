import React, { Component } from 'react'

class Field extends Component {
   constructor (props) {
      super(props)
      this.state = { value: props.initialValue }
      this.handleChange = this.handleChange.bind(this)
   }

   handleChange (e) {
      this.setState( {value: e.target.value} )
   }
   
   render () {
      return <div>
         <label>{this.state.value}</label> <br/>
         <input onChange={this.handleChange} value={undefined}/>
      </div>
   }
}

export default Field
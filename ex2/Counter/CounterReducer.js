const INITIAL_STATE = { value: 0, step: 1 }


export default (state = INITIAL_STATE, action) => {
   switch(action.type) {
      case 'COUNTER_INC':
         return {...state, value: state.value + state.step}
      case 'COUNTER_DEC':
         return {...state, value: state.value - state.step}
      case 'STEP_CHANGE':
         return {...state, step: +action.payload}
      default:
         return state
   }

}
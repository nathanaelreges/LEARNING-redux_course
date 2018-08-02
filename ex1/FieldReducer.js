const INITIAL_STATE = { value: 'opa'}

const reducer = (state = INITIAL_STATE, action) => {
   switch (action.type){
      case 'CHANGE_VALUE':
         return { value: action.payload}
      default:
         return state
   }
}

export default reducer
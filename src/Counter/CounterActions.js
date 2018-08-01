export function inc () {
   return {
      type: 'COUNTER_INC'
   }
}

export function dec () {
   return {
      type: 'COUNTER_DEC'
   }
}

export function stepChange (value) {
   return {
      type: 'STEP_CHANGE',
      payload: value
   }
}
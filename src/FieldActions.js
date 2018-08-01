function changeValue (e) {
   console.log('Change Value')
   return {
      type: 'CHANGE_VALUE',
      payload: e.target.value   
   }
}

export { changeValue }
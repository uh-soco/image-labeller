const PathlistReducer = (state = [], action) => {

  if (action.type==='SET') {
      return action.data
  }
 
  return state

}

export default PathlistReducer

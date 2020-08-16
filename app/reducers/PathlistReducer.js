const PathlistReducer = (state = [], action) => {

  if (action.type==='SET_PATHLIST') {
      return action.data
  }
 
  return state

}

export default PathlistReducer

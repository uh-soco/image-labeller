const NotificationReducer = (state = 'moiMME', action) => {

    if (action.type==='INCREMENT') {
        return 'INCREMENTED'
    }
    if (action.type==='MINUS') {
        return 'DECREMENTED'
    }
  
    return state
    }
  
  export default NotificationReducer
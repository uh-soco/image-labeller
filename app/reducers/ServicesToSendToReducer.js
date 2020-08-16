import services from '../constants/services.json'

const namesOfServices = servs => servs.map(s => s.name) // For initing store state


const ServicesToSendToReducer = (state = namesOfServices(services), action) => {

    if (action.type==='SET_SERVICESTOSEND') {
        return action.data
    }
   
    return state
  
  }
  
export default ServicesToSendToReducer
  

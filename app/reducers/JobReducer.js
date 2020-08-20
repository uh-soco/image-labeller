

// The purpose of this is to require dummyjob only if env is development
const getDummyjob = () => {
  return require('../../tests/helpers/dummyjob.json')
}

const emptyJob = process.env.NODE_ENV === 'development' ?
  getDummyjob()
   : 
  {
    sessionJobID: 0,
    services: [],
    result: []
  }




const JobReducer = (state = emptyJob, action) => {

  switch (action.type) {
    case 'SET_JOB':
      return action.data
  }
  return state
}

export default JobReducer
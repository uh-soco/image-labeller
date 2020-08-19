import React from 'react'

import ResultCrosstabulation from '../components/ResultCrosstabulation'

import { useSelector  } from 'react-redux'


  
const Results = () => {

    const job   = useSelector(state => state.Job)

    if (job.sessionJobID === 0) {
        return(<h4>No results to show!</h4>)
    }

    return(
        <div>
        
        <ResultCrosstabulation job={job} />
        
        </div>
    )
}

export default Results
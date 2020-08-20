import React from 'react'

import ResultCrosstabulation from '../components/ResultCrosstabulation'

import { useSelector  } from 'react-redux'

import { Container } from 'react-bootstrap'
  
const Results = () => {

    const job   = useSelector(state => state.Job)

    if (job.sessionJobID === 0) {
        return(<h4>No results to show!</h4>)
    }

    return(
        <Container>
        
            <ResultCrosstabulation job={job} />
        
        </Container>
    )
}

export default Results
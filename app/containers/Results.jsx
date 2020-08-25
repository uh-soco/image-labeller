import React from 'react'

import ResultCrosstabulation from '../components/ResultCrosstabulation'
import WordCloud from '../components/WordCloud'
import TagList from '../components/TagList'

import { useSelector  } from 'react-redux'

import { Container } from 'react-bootstrap'
import Export from '../components/Export'
  
const Results = () => {

    const job   = useSelector(state => state.Job)

    if (job.sessionJobID === 0) {
        return(<h4>No results to show!</h4>)
    }

    return(
        <Container>
            <Export job={job}  />
            <ResultCrosstabulation job={job} />
            <WordCloud job={job} />
            <TagList job={job} />
        
        </Container>
    )
}

export default Results
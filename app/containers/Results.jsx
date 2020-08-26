import React from 'react'

import ResultCrosstabulation from '../components/ResultCrosstabulation'
import WordCloud from '../components/WordCloud'
import TagList from '../components/TagList'
import Export from '../components/Export'

import { useSelector  } from 'react-redux'
import { Container, Row} from 'react-bootstrap'
  
const Results = () => {

    const job   = useSelector(state => state.Job)

    if (job.sessionJobID === 0) {
        return(<h4>No results to show!</h4>)
    }

    return(
        <Container> 
            <Row>          
                <ResultCrosstabulation job={job} />
                <Export job={job}  />
            </Row>
            <WordCloud job={job} />
            <TagList job={job} />                   
        </Container>
    )
}

export default Results
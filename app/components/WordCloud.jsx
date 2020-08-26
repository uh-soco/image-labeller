import React from 'react'
import ReactWordcloud from 'react-wordcloud'
import styles from './WordCloud.css'
import { Container, Row, Col } from 'react-bootstrap'

const WordCloud = ({ job }) => {

    if (!job) {
        return null
    }

    const services = job.services
    const result = job.result

    if (!result || result.length === 0) {
        return ''
    }

   
    const options = {
        fontSizes: [10, 45],
        rotations: 0, //all words horizontally
        layout: 'rectangular'
    }


    const tags = (service) => {
        return result.filter(row => row.service === service).map(row =>
            ({
                text: row.label,
                value: row.accuracy
            })
        )
    }


    return (
        <div>
            <Container>
                <Row>
                {
                    services.map(service => {
                        return(
                            <div key={service} className={styles.row}>
                                <Col>
                                    <ReactWordcloud options={options}
                                    words={tags(service)} />
                                </Col>
                            
                                
                            </div>
                        )
                    })
                }
                </Row>
            </Container>  
        </div>
    )

}

export default WordCloud

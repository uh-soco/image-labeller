import React, { useState } from 'react'
import { Table, Button } from 'react-bootstrap'


const TagList = ({ job }) => {
    
    if (!job) {
        return null
    }

    const result = job.result

    if (result.length === 0) {
        return null
    }

    const [ shown, setShown ] = useState(10)

    const tablestyle = {
        backgroundColor: 'whitesmoke',
        color: 'black'
    }

    const handleShowMore = ( howmany ) => {
        const current = shown
        setShown(current + howmany)
    }

    return (
        <div>
            <Table style={tablestyle} size="sm" striped bordered hover>
                <thead>
                    <tr>
                        <th>Tag</th>
                        <th>Accuracy</th>
                        <th>Service</th>
                        <th>Parents</th>
                    </tr>
                </thead>
                <tbody>
                        { 
                            result.slice(0, shown).map((tag, index) => {
                                
                                return (
                                    <tr key={tag.label + tag.service + index}>
                                        <td>{tag.label}</td>
                                        <td> {Math.floor(tag.accuracy * 10000) / 100} %</td>
                                        <td> { tag.service }</td>
                                        <td> { tag.parents.map(parent => parent + ', ') } </td>
                                    </tr>
                                )
                            })  
                        }
                </tbody>
            </Table>
            <Button variant="primary" id='showMore' onClick={() => handleShowMore(10)}>show 10 more</Button>
        </div>
    )

}

export default TagList
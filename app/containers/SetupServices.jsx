import React, { useState } from 'react'
import services from '../constants/services.json'
import { useSelector, useDispatch  } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import setServicesToSendTo from '../actions/setServicesToSendTo'
import sendImages from '../utils/sendImages'
import Animation from '../components/Animation'

import routes from '../constants/routes.json'
import setJob from '../actions/setJob'

const SetupServices = () => {

  const [animation,setAnimation] = useState([])
  const [analysisDone, setAnalysisDone] = useState(false)

  const pathlist          = useSelector(state => state.Pathlist)
  const job               = useSelector(state => state.Job)
  const configuration     = useSelector(state => state.Configuration)
  const ServicesToSendTo  = useSelector(state => state.ServicesToSendTo)



  const dispatch = useDispatch()

  const handleSelection = name => {

    const changedServiceSet = ServicesToSendTo.includes(name) ? ServicesToSendTo.filter(s => s !== name) : ServicesToSendTo.concat(name)

    dispatch(setServicesToSendTo(changedServiceSet))
      
  }

  const styles = {
    fontSize: '120%'
  }


  const handleJobChange = result => {
        
    const newJob = {
        sessionJobID: job.sessionJobID + 1,
        services: ServicesToSendTo,
        result: result
    }
    
    dispatch(setJob(newJob))
}

  const doAnalyze = () => {

    const animationTextForImageTagging = 'Sending images for tagging..'

    setAnimation(animation.concat(animationTextForImageTagging))

    const imagetags = sendImages(pathlist,ServicesToSendTo,configuration).then(res => {


      handleJobChange(res)
      setAnimation(animation.filter(text => text != animationTextForImageTagging))
      setAnalysisDone(true)
      return res
    })

    
  }

  

  const towardsResultsButton = () => {
    const linkStyle = {
      color: 'white',
      textDecoration: 'none' // Remove underline from links
  
    }
    return(
      <Button
        variant="success"
        size="lg"
        block
        
      >
        <Link style={linkStyle} to={routes.RESULTS}>To results!</Link>
      </Button>
    )
  }

  return(
    <Container>  

      <Row>
        <p>
          Ready to analyze { pathlist.length } images. Choose services which are used for image labelling.
        </p>
      </Row>
      <Row>
        <Form>
          {
            services.map(service => {
              return (
                <div key={service.name} className="mb-3">
                  <Form.Check
                    style={styles}
                    type='checkbox'
                    checked={ServicesToSendTo.includes(service.name)}
                    label={service.name}
                    id={'checkbox'}
                    onChange={() => handleSelection(service.name)}
                  />
                </div>
              )
            })
          }
        </Form>
      </Row>
      <Row>
        <Col/>
        <Col  xs={6}>

          {
            analysisDone ? towardsResultsButton() 
             : <Button
                variant="success"
                disabled={ServicesToSendTo.length === 0}
                onClick={doAnalyze}
                size="lg"
                block
                >
                  Analyze {pathlist.length} images using {ServicesToSendTo.length} services
              </Button>
          }
        </Col>
        <Col/>
      </Row>
      
      <Row style={{marginTop: '2%'}}>
        <Col/>
        <Col  xs={6}>
          {
            animation.map(animationtext => <Animation animationtext={animationtext} />)
          }
        </Col>
        <Col/>
      </Row>
      
    </Container>
  )
}

export default SetupServices
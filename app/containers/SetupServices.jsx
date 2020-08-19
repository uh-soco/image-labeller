import React from 'react'
import services from '../constants/services.json'
import { useSelector, useDispatch  } from 'react-redux'
import { Container, Form, Button } from 'react-bootstrap'
import setServicesToSendTo from '../actions/setServicesToSendTo'
import sendImages from '../utils/sendImages'

import setJob from '../actions/setJob'

const SetupServices = () => {


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

    const imagetags = sendImages(pathlist,ServicesToSendTo,configuration).then(res => {
      handleJobChange(res)
      return res
    })

    
  }

  return(
    <Container>  

      <p>
        Ready to analyze { pathlist.length } images. Choose services which are used for image labelling.
      </p>

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

      <Button
        variant="success"
        disabled={ServicesToSendTo.length === 0}
        onClick={doAnalyze}
        >
        Analyze {pathlist.length} images using {ServicesToSendTo.length} services
      </Button>
    </Container>
  )
}

export default SetupServices
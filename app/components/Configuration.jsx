import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import routes from '../constants/routes.json'
import services from '../constants/services.json'

import Input from './Input'

import { useSelector, useDispatch } from  'react-redux'
import setConfiguration from '../actions/setConfiguration'

import { Button,  Container, Row, Col } from 'react-bootstrap'

const Configuration = (  ) => {

  
  const [SERVICE, setSERVICE] = useState('')

  useEffect(() => {
    const defaultService = services[0].name
    setSERVICE(defaultService)
  },[])



  const dispatch       = useDispatch()

  const configurations  = useSelector(state => state.Configuration) // Holds store (= all configurations)
  const configuration   = configurations[SERVICE]                   // Holds selected configuration


  if (!services | !configuration) {
    return ''
  }

  const handleConfigChange = (e,which) => {
    
    let alteredConfig = { ...configuration }

    alteredConfig.options = alteredConfig.options.map( opt => {
      opt.value = opt.name === which.name ?  e.target.value : opt.value
      return opt
    })
   
    dispatch( setConfiguration(alteredConfig) )
    
  }


  const displaySecret = (secret) => {
    if (secret) {
      return secret.replace(/./g,'*') 
    }
    return ''
  }

  return(
    <Container>
      <Row>
        <Link to={routes.HOME}>
          <i className="fa fa-arrow-left fa-3x">HOME</i>
          
        </Link>
      </Row>
      <Row>
        
        {
          services.map(service => {

            const variant = service.name === SERVICE ? 'success' : 'primary'

            return (
              <div key={service.name} style={{ margin: '5px' }}>
                <Button  variant={variant}  onClick={() => setSERVICE(service.name)}>
                  { service.name }
                </Button>  
              </div>
            )
          })
          
        }
        
      </Row>
      <Row>
        <Col>
          
          {
            
            configuration.options.map(opt => {  
              return (
                <div key={SERVICE+opt.name}>
                  <Input placeholder={opt.displayName} name={opt.displayName}  onChange={(e) => handleConfigChange(e,opt)} type='text' ></Input>
                </div>
              )
            })
            
          }
        </Col>
        <Col>
          <div>
            Current config for {SERVICE}:
            <ul>
              {  
                configuration.options.map(opt => {
                  return(
                    <li key={SERVICE+opt.name}>
                      {opt.displayName}: { opt.secret ? displaySecret(opt.value) : opt.value }
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
          
  )
  

  
}

export default Configuration
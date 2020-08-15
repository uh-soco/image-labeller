import React, { useState } from 'react'
import getId from '../utils/getId'
import Listing from '../components/Listing'
import Input from '../components/Input'
import { Button, Container, Col, Row, Accordion, Card } from 'react-bootstrap'
import { useSelector, useDispatch } from  'react-redux'
import setPathlist from '../actions/setPathlist'

const SetupImages = () => {


  const pathlist = useSelector(state => state.Pathlist)
  const dispatch     = useDispatch()

  const [imageURL, setImageURL] = useState('https://picsum.photos/id/256/200/200.jpg') 

  const handlePathlistChange = list => {
    console.log('changed to',list)
    dispatch(setPathlist(list))
  }

  const handleURLchange = e => {
    setImageURL(e.target.value)
  }

  const handleClickURL = () => {
    handlePathlistChange(pathlist.concat({ type: 'url', path: imageURL, selected: true, id: getId() }))
    setImageURL('')
  }

  const handleClickURLsFromFile = (event) => {

    event.preventDefault();
    const files = event.target.files;

    // See preload.js for definition of loadFile
    window.api.loadFile(files[0].path)
            .then(content => {
              const paths = content.map(url => {
                  return { type: 'url', path: url, selected: true, id: getId() }
              })
            handlePathlistChange(pathlist.concat(paths))
            })    
      
  }

  const handleClickLocal = event => {
    event.preventDefault();
    let files = event.target.files;
    files = Object.keys(files).map(key => files[key].path) // files is an object, not an array.  

    const paths = files.map(filePath => {
        return { type: 'localPath', path: filePath, selected: true, id: getId() }
    })
    handlePathlistChange(pathlist.concat(paths))

  }

  const buttonVariant = 'primary'

  return(
    <Container>
      <Row>
        <Col>
          <Row>
            <Accordion>
              <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      Add URL for image to tag
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                    <Input name={'URL for image to tag'} placeholder={'http://domain.com/image.jpg'} onChange={handleURLchange} />
                    <Button variant={buttonVariant} onClick={handleClickURL}>Add to list</Button>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>

              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    Choose file to load URLs from
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                  <input
                    type="file"
                    id="URLlistChooser"
                    accept=".txt"
                    onChange={handleClickURLsFromFile} />
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="2">
                    Add local images
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                  
                  <input
                    type="file"
                    id="URLlistChooser"
                    multiple={true}
                    accept=".jpg,.png,.gif"
                    onChange={handleClickLocal} />
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

            </Accordion>
          </Row>
        </Col>
        <Col>
        <Listing onListUpdate={handlePathlistChange} listItems={pathlist}/>
        </Col>
      </Row>
    </Container>
  )
}

export default SetupImages
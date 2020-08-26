import React, { useState } from 'react'

import { Button, Spinner } from 'react-bootstrap'
import InfoModal from './InfoModal'
import exportResults from '../utils/exportResults'

const Export = ({ job })  => {

  const exportFormats = ['CSV','SQLite','JSON']

  const [showExportChoice, setShowExportChoice] = useState(false)
  const [exportingStatus , setExportingStatus]  = useState('pre')
  
  const preliminaryModalTitle = 'Bitte wählen Sie das Exportformat'
  const [modalTitle , setModalTitle]  = useState(preliminaryModalTitle)
  
  const handleClickExport = () => {
    setShowExportChoice(true)
  }

  const handleClose = () => {
    setShowExportChoice(false)
    setExportingStatus('pre')
    setModalTitle(preliminaryModalTitle)

  }

  const chooseFormatAndExport = (newFormat) => {

    setExportingStatus('cur')
    setModalTitle('Exportieren..')
      
    exportResults(job, newFormat ).then(res => {
      
      setModalTitle(`Schrieb ${res} Reihen`)
      setExportingStatus('post')
    })
      
  }

  const modalbody =  
    <div>
        {
          exportingStatus === 'cur' ? <Spinner animation="border" role="status" /> : ''
        }
        {
          exportingStatus === 'post' ? <Button variant="primary" onClick={handleClose}>Gut!</Button> : ''
        }
        {
          exportingStatus === 'pre' ? exportFormats.map(format =>  <Button variant="primary" key={format} onClick={() => chooseFormatAndExport(format) }>{ format }</Button>) : ''
        }
    </div>

  return(
    <div>
        <Button style={{margin:'0 0 0 10px'}} variant="primary" onClick={handleClickExport}>Export tags</Button>
        <InfoModal show={showExportChoice} hide={handleClose} title={modalTitle} body={modalbody}/>
    </div>
  )
}

export default Export
import React, { useState } from 'react'

import { Table, Button} from 'react-bootstrap'
import InfoModal from './InfoModal'

const Listing = ({ onListUpdate, listItems }) => {

  
  const [showRemoveAllModal, setShowRemoveAllModal] = useState(false)

  const hideModal = () => setShowRemoveAllModal(false)


  const modalTitle = 'Art thou certain thou wishest to discard all images?'
  const modalBody = 
    <div>
        <Button variant="primary" onClick={ () =>  { onListUpdate([]); hideModal()  }  }>aye</Button>
        <Button variant="secondary" onClick={hideModal}>nay</Button>
    </div>



  const handleImageSelectionAll = selectionValue => {
    const manipulatedListitems = listItems.map(p => ({ ...p, selected: selectionValue }))
    onListUpdate(manipulatedListitems)
  }

  const handleImageSelection = path => {
    const changedOneSelection = listItems.map(p => p.path === path ? {...p, selected: !p.selected} : p)
    onListUpdate(changedOneSelection)
  }

  const handleDelete = path => {
    const deletedOneListing = listItems.filter(p => p.path !== path)
    onListUpdate(deletedOneListing)
  }

  const handleDeleteAll = () => {
    setShowRemoveAllModal(true)
  }


  return (
    <div>
      <Table striped variant="dark" size="sm" responsive="sm">
        <thead>
            <tr>
                <th className="text-light">Send to service</th>
                <th className="text-light">Path/url</th>
                <th className="text-light">Delete</th>
            </tr>
        </thead>
        <tbody>
          {
            listItems.map((path,idx) => 
              {
              return(
                  // TODO: add id to key
                  <tr key={path.path+idx}>
                      <td><input type='checkbox' checked={path.selected} onChange={() => handleImageSelection(path.path)}></input></td>
                      <td className="text-light">{path.path}</td>
                      <td>
                          <Button variant='error' id="delete" onClick={() => handleDelete(path.path)}><span>🗑</span></Button>
                      </td>
                  </tr>
              )}
            )
          }
          <tr>
              <td>
                <Button variant="outline-success" id='selectAll' onClick={() => handleImageSelectionAll(true)}>Select all</Button>
                <Button variant="outline-secondary" id='unselectAll' onClick={() => handleImageSelectionAll(false)}>Unselect all</Button>
              </td>
              <td></td>
              <td>
                <Button variat='error' id='deleteAll' onClick={handleDeleteAll}>Delete all</Button>
              </td>  
              <InfoModal hide={hideModal} show={showRemoveAllModal}  title={modalTitle} body={modalBody}/> 
          </tr>
        </tbody>
      </Table>
    </div>
    )
}

export default Listing
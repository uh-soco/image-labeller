import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import routes from '../constants/routes.json'
import { Navbar,  Nav, Button, ButtonGroup, DropdownButton, Dropdown  } from 'react-bootstrap'

const Menu = () => {

  const navBarLinkStyle = {
    color: 'white',
    textDecoration: 'none' // Remove underline from links

  }

  const dropdownLinkStyle = {
    color: 'black',
    textDecoration: 'none' // Remove underline from links

  }

  const menuStyle = {
    marginBottom: '2%'
  }

  return(
    <Navbar style={menuStyle} bg="primary" variant="light">
      
      <Nav className="mr-auto">
        <ButtonGroup>
        
          <Button variant='success'><Link style={navBarLinkStyle} to={routes.HOME}>Home</Link></Button>
        
        
          <Button variant='success'><Link style={navBarLinkStyle} to={routes.CONFIGURATION}>Configure services </Link></Button>

          <DropdownButton variant='success' as={ButtonGroup} title="Analyze" id="bg-vertical-dropdown-3">
            <Dropdown.Item as='div' eventKey="1">
              <Link style={dropdownLinkStyle} to={routes.IMAGESETUP}>1. Setup images for analysis</Link>              
            </Dropdown.Item>
            <Dropdown.Item as='div' eventKey="2">
              <Link style={dropdownLinkStyle} to={routes.SERVICESETUP}>2. Setup services</Link>              
            </Dropdown.Item>
            <Dropdown.Item as='div' eventKey="3">
              <Link style={dropdownLinkStyle} to={routes.RESULTS}>3. Results</Link>              
            </Dropdown.Item>
          </DropdownButton>
       
        </ButtonGroup>
      </Nav>
      
    </Navbar>
  )
    
}

export default Menu
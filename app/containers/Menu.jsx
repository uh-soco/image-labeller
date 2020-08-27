import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import routes from '../constants/routes.json'
import { Navbar,  Nav, Button, ButtonGroup,  ButtonToolbar  } from 'react-bootstrap'

const Menu = () => {

  const [view,setView] = useState() // Holds path on current URL. Only for the purposes of showing which page we're on.
  const history = useHistory()

  useEffect(() => setView(window.location.pathname),[])

  const navBarLinkStyle = {
    color: 'white',
    textDecoration: 'none' // Remove underline from links

  }


  const menuStyle = {
    backgroundColor: '#3c6382',
    marginBottom: '2%'
  }

  

  let menuButtons = [
    { route: routes.HOME          ,text: 'Home'  },
    { route: routes.CONFIGURATION ,text: 'Configure services'  },
    { route: routes.IMAGESETUP    ,text: '1. Setup images for analysis'  },
    { route: routes.SERVICESETUP  ,text: '2. Setup services' },
    { route: routes.RESULTS       ,text: '3. Results' }

  ]



  const selectedButtonStyle = {
    backgroundColor: '#82ccdd',
    color: 'white'
  }


  const unselectedButtonStyle = {
    backgroundColor: '#60a3bc',
    color: 'white'
  }

  

  const changePage = (e,r) => {
    setView(r)
    history.push(r)
  }

  const ref = React.createRef()


  return(
    <Navbar style={menuStyle} variant="light">
      
          <ButtonGroup>
            {
              menuButtons.map(b => {
                const buttonStyle = b.route === view? selectedButtonStyle : unselectedButtonStyle
              
                /*
                  Note: Clicking Link-element will change the page by default.
                  The Button, does not respond without changePage()                
                */
              
                return(
                    <Button
                      style={buttonStyle}
                      key={b.text}
                      onClickCapture={(e) => changePage(e,b.route)}
                    >
                    <Link ref={ref} style={navBarLinkStyle} to={b.route}>{ b.text }</Link>              
                    </Button>
                )
                
              })
            }
          
          </ButtonGroup>
    </Navbar>
  )
    
}

export default Menu
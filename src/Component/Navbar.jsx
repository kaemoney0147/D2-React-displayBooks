

import {Navbar,Nav,Container} from 'react-bootstrap'
const NavBar=(props)=>{
    return(
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">{props.bookTitle}</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ml-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">About Us</Nav.Link>
              <Nav.Link href="#pricing">Browse</Nav.Link>
              
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
export default NavBar
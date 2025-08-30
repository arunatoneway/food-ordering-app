
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Signinoffcanvas from './Signinoffcanvas';


function Navbarland() {



    return <>

        <Navbar expand="lg" style={{ padding: '30px', backgroundColor: '#FF6F61' }}>
            <Container fluid>
                <Navbar.Brand href="#" style={{ fontSize: '40px', marginLeft: '40px', color: '#FFF8F0' }}>MealWay</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-5 ms-auto my-2 my-lg-0 "
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link to="/" style={{ textDecoration: 'none' }} >

                            <Nav.Link style={{ color: '#FFF8F0' }} href="#action1">Home</Nav.Link>
                        </Link>
                        <Link to="/About" style={{ textDecoration: 'none' }}>
                            <Nav.Link style={{ color: '#FFF8F0' }} href="#action2">About MealWay</Nav.Link>
                        </Link>
                        
                        <Signinoffcanvas/>
                        
                    </Nav>


                </Navbar.Collapse>
            </Container>
        </Navbar>


    </>
}

export default Navbarland
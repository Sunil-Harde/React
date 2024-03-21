import React from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'


function NavBar() {
    return (
        <div>

            <Navbar bg='dark' data-bs-theme="dark" fixed='top'>

                <Container fluid>

                    <Navbar.Brand>
                        Brand text
                    </Navbar.Brand>

                        <Nav >
                            <Nav.Link href="/Home">Home</Nav.Link>
                            <Nav.Link href="/Login">Login</Nav.Link>
                            <Nav.Link href="/Register">Register</Nav.Link>
                        </Nav>

                </Container>

            </Navbar>
        </div>
    )
}

export default NavBar

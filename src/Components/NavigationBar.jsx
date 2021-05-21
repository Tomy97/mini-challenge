import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'

const NavigationBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="d-flex justify-content-end" id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/" >Home</Nav.Link>
                    <Nav.Link href="/form">Creacion De Formulario</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}

export default NavigationBar

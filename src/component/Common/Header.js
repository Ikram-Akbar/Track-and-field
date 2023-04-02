import React from 'react';
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
    return (
        <>
            <Navbar bg="danger" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Track and Field</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Nav className="m-auto">
                        <Nav.Link href="#home">Categories</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
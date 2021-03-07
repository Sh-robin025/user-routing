// import { Button } from 'bootstrap';
import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <div className="container">
                <Navbar.Brand href="home"><Link to="/">Navbar Logo</Link></Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="home"><Link to="/">Home</Link></Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </div>
        </Navbar>
    );
};

export default Header;
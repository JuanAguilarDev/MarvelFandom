import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';

// Styles
import './Navbar.css';

function NavigationBar({setIdCharacter}) {

    const [inputValue, setInputValue] = useState('');

    const onInputChanged = ({target: {value}}) => {
        console.log(value);
        setInputValue(value)
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        const newInputValue = inputValue.trim();
        if(newInputValue.length <= 1) return;
        setIdCharacter(newInputValue);
        setInputValue('');
    }


    return (
        <Navbar bg="dark" variant={"dark"} expand="lg">
            <Container fluid>
                <Navbar.Brand href="/">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png"
                        width="90"
                        height="30"
                        className="navbar--image d-inline-block align-top"
                        alt="Marvel Fandom logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                        <Nav.Link as={Link} to={"/test"}>Test</Nav.Link>
                        <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" disabled>
                            Link
                        </Nav.Link>
                    </Nav>
                    <Form onSubmit={onSubmit} className="d-flex">
                        <Form.Control
                            onChange={onInputChanged}
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button type="submit" variant="outline-danger">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
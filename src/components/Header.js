import React, { useState } from 'react'
import { Container, Nav, Navbar, NavDropdown, } from 'react-bootstrap'
import '../App.css'
import '../Responsive.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBook, faBullhorn, faEnvelope, faTimes, faBars, faUserPlus, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    const [expanded, setExpanded] = useState(false);
    return (
        <Navbar expand="lg" className="p-0 navbar">
            <Container className='NavContainer'>
                <Navbar.Brand href="#" className='p-0 navBrand'>
                    <img
                        src="./logo.png"
                        width="80"
                        alt="Arya Pathshala Logo"
                    />
                </Navbar.Brand>

                <h1 className='m-0 mt-2'>आर्य पाठशाला</h1>

                <Navbar.Toggle
                    aria-controls="my-nav"
                    onClick={() => setExpanded(expanded ? false : "expanded")}
                >
                    {expanded ? (
                        <FontAwesomeIcon icon={faTimes} size="lg" />
                    ) : (
                        <FontAwesomeIcon icon={faBars} size="lg" />
                    )}
                </Navbar.Toggle>

                <Navbar.Collapse id="my-nav">
                    <Nav className="m-auto fw-bold text-center gap-2 myNav">
                        {/* Home */}
                        <Nav.Link href="#home" active>
                            <FontAwesomeIcon icon={faHome} className="navIcon" /> मुखपृष्ठ
                        </Nav.Link>

                        {/* Dropdown: पाठ्यक्रम */}
                        <NavDropdown title={<><FontAwesomeIcon icon={faBook} className="navIcon" /> पाठ्यक्रम</>} id="coursesDropdown">
                            <NavDropdown.Item href="#ved">वेद</NavDropdown.Item>
                            <NavDropdown.Item href="#vedang">वेदांग</NavDropdown.Item>
                            <NavDropdown.Item href="#upanishad">उपनिषद्</NavDropdown.Item>
                            <NavDropdown.Item href="#darshan">दर्शनशास्त्र</NavDropdown.Item>
                            <NavDropdown.Item href="#aarshe">अन्य आर्षग्रन्थ</NavDropdown.Item>
                            <NavDropdown.Item href="#netexam1">राष्ट्रीय पात्रता परीक्षा (संस्कृत 25)</NavDropdown.Item>
                            <NavDropdown.Item href="#netexam2">राष्ट्रीय पात्रता परीक्षा (संस्कृत 73)</NavDropdown.Item>
                        </NavDropdown>

                        {/* Dropdown: पुस्तकालय */}
                        <NavDropdown title={<><FontAwesomeIcon icon={faBook} className="navIcon" /> पुस्तकालय</>} id="libraryDropdown">
                            <NavDropdown.Item href="#mainBook">मूल ग्रन्थ</NavDropdown.Item>
                            <NavDropdown.Item href="#VaykhyanBook">व्याख्यान ग्रन्थ</NavDropdown.Item>
                            <NavDropdown.Item href="#VidhwatLekh">विद्वत्-लेख एवं शोध पत्र</NavDropdown.Item>
                        </NavDropdown>

                        {/* Notices */}
                        <Nav.Link href="#notices">
                            <FontAwesomeIcon icon={faBullhorn} className="navIcon" /> सूचनाएँ
                        </Nav.Link>

                        {/* Contact */}
                        <Nav.Link href="#contact">
                            <FontAwesomeIcon icon={faEnvelope} className="navIcon" /> शंका समाधान एवं सम्पर्क
                        </Nav.Link>

                    </Nav>

                    {/* Login & Signup Buttons */}
                    <div className="auth-btn">
                        <a href="#signin">
                            <button className="btn-login" type="button">
                                <FontAwesomeIcon icon={faSignInAlt} className="me-1" /> प्रवेशः
                            </button>
                        </a>
                        <a href="#signup">
                            <button className="btn-signup" type="button">
                                <FontAwesomeIcon icon={faUserPlus} className="me-1" /> पञ्जीकरणम्
                            </button>
                        </a>
                    </div>
                </Navbar.Collapse>
            </Container >
        </Navbar >
    )
}

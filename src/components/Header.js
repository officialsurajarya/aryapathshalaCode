import React, { useState, useEffect, useRef } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import '../App.css';
import '../Responsive.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBook, faBullhorn, faEnvelope, faTimes, faBars, faUserPlus, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

export default function Header({ onCategorySelect }) {
    const [expanded, setExpanded] = useState(false);
    const navRef = useRef();

    // Close navbar if clicked outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setExpanded(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [navRef]);

    // Handle category click
    const handleCategoryClick = (category) => {
        onCategorySelect(category);
        setExpanded(false); // ✅ Close menu after click
    };

    return (
        <Navbar expand="lg" expanded={expanded} className="p-0 navbar fixed-top" ref={navRef}>
            <Container className='NavContainer'>
                <Navbar.Brand href="#" className='p-0 navBrand'>
                    <img src="./logo.png" width="80" alt="Arya Pathshala Logo" />
                </Navbar.Brand>

                <h1 className='m-0 mt-2'>Arya Pathshala</h1>

                <Navbar.Toggle
                    aria-controls="my-nav"
                    onClick={() => setExpanded(expanded ? false : true)}
                >
                    {expanded ? (
                        <FontAwesomeIcon icon={faTimes} size="lg" />
                    ) : (
                        <FontAwesomeIcon icon={faBars} size="lg" />
                    )}
                </Navbar.Toggle>

                <Navbar.Collapse id="my-nav">
                    <Nav className="m-auto fw-bold text-center gap-2 myNav">
                        <Nav.Link href="#home" onClick={() => setExpanded(false)}>
                            <FontAwesomeIcon icon={faHome} className="navIcon" /> मुखपृष्ठ
                        </Nav.Link>

                        <NavDropdown title={<><FontAwesomeIcon icon={faBook} /> पाठ्यक्रम</>} id="coursesDropdown">
                            <NavDropdown.Item onClick={() => handleCategoryClick('ved')}>वेद</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => handleCategoryClick('vedang')}>वेदांग</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => handleCategoryClick('upanishad')}>उपनिषद्</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => handleCategoryClick('darshan')}>दर्शनशास्त्र</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => handleCategoryClick('aarshgrantha')}>अन्य आर्षग्रन्थ</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => handleCategoryClick('netexam25')}>राष्ट्रीय पात्रता परीक्षा (संस्कृत 25)</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => handleCategoryClick('netexam73')}>राष्ट्रीय पात्रता परीक्षा (संस्कृत 73)</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title={<><FontAwesomeIcon icon={faBook} /> पुस्तकालय</>} id="libraryDropdown">
                            <NavDropdown.Item href="#mainBook" onClick={() => setExpanded(false)}>मूल ग्रन्थ</NavDropdown.Item>
                            <NavDropdown.Item href="#VaykhyanBook" onClick={() => setExpanded(false)}>व्याख्यान ग्रन्थ</NavDropdown.Item>
                            <NavDropdown.Item href="#VidhwatLekh" onClick={() => setExpanded(false)}>विद्वत्-लेख एवं शोध पत्र</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link href="#notices" onClick={() => setExpanded(false)}>
                            <FontAwesomeIcon icon={faBullhorn} className="navIcon" /> सूचनाएँ
                        </Nav.Link>

                        <Nav.Link href="#contact" onClick={() => setExpanded(false)}>
                            <FontAwesomeIcon icon={faEnvelope} className="navIcon" /> शंका समाधान एवं सम्पर्क
                        </Nav.Link>
                    </Nav>

                    <div className="auth-btn">
                        <a href="#signin">
                            <button className="btn-login" type="button" onClick={() => setExpanded(false)}>
                                <FontAwesomeIcon icon={faSignInAlt} className="me-1" /> प्रवेशः
                            </button>
                        </a>
                        <a href="#signup">
                            <button className="btn-signup" type="button" onClick={() => setExpanded(false)}>
                                <FontAwesomeIcon icon={faUserPlus} className="me-1" /> पञ्जीकरणम्
                            </button>
                        </a>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

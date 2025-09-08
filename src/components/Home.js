import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../App.css'
import '../Responsive.css'
import HeroStats from './HeroStats'
import { faPlayCircle, faSignInAlt, faUserPlus, faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HeroVisual from './HeroVisual'

export default function Home() {
    return (
        <Container fluid >
            <Container>
                <Row>
                    <Col className='col-lg-6 col-md-12 order-lg-1 order-2'>
                        <div class="hero-content">
                            <h1 class="hero-title">
                                <span class="sanskrit-text">आर्य पाठशाला</span>
                                <span class="subtitle">नमस्ते! आर्य पाठशाला में आपका हार्दिक स्वागत एवं अभिनन्दन
                                    है!</span>
                            </h1>
                            <p class="hero-description">
                                आर्यावर्त की गौरवशाली शास्त्र परंपरा से सुसज्जित, आर्य पाठशाला एक ऐसा ऑनलाइन शिक्षण
                                संस्थान है जहाँ पाठकों को शास्त्र ज्ञान के साथ नैतिकता और जीवन मूल्यों की शिक्षा दी जाती
                                है। हमारा उद्देश्य आर्य विद्यार्थियों को बौद्धिक और मानसिक रूप से विकसित करना है।
                                वर्तमान में गुरुकुलीय परंपरा से गुरु के समक्ष उपस्थित होकर शास्त्र अध्ययन कर पाना कठिन
                                हो रहा है, अतः जो आर्य विद्यार्थी आधुनिक शिक्षा के साथ-साथ घर बैठे शास्त्र अध्ययन के
                                इच्छुक हैं, उनके लिए आर्य पाठशाला ने शास्त्र अध्ययन
                                की एक अनोखी पहल आरंभ की है।
                            </p>
                        </div>
                        <HeroStats />

                        {/* Hero Action */}
                        <div className="auth-btn">
                            <a href="#signin">
                                <button className="btn-login fw-bold fs-5" type="button">
                                    <FontAwesomeIcon icon={faPlayCircle} className="me-1 " /> <br />अध्ययन आरंभ करें
                                </button>
                            </a>
                            <a href="#signup">
                                <button className="btn-signup fw-bold fs-5" type="button">
                                    <FontAwesomeIcon icon={faVideo} className="me-1" /> <br /> पाठ्यक्रम देखें
                                </button>
                            </a>
                        </div>
                    </Col>
                    <div class="col-lg-6 col-md-12 order-lg-2 order-1 heroVisual">
                        <HeroVisual />
                    </div>
                </Row>
            </Container>
        </Container>
    )
}

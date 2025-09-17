import React from "react";
import "./Footer.css"; // optional: link your CSS file here
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
    FaWhatsapp,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    {/* About Arya Pathshala */}
                    <div className="footer-section">
                        <h3>आर्य पाठशाला</h3>
                        <p>
                            आर्यावर्त की प्राचीन शास्त्र परम्परा को जन-जन तक पहुँचाने हेतु समर्पित
                        </p>
                        {/* Social Media Links */}
                        <div className="social-icons">
                            <a href="#" className="social-icon facebook" aria-label="Facebook">
                                <FaFacebookF />
                            </a>
                            <a
                                href="https://x.com/aryapathshala"
                                className="social-icon twitter"
                                aria-label="Twitter"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaTwitter />
                            </a>
                            <a href="#" className="social-icon instagram" aria-label="Instagram">
                                <FaInstagram />
                            </a>
                            <a href="#" className="social-icon linkedin" aria-label="LinkedIn">
                                <FaLinkedinIn />
                            </a>
                            <a href="#" className="social-icon youtube" aria-label="YouTube">
                                <FaYoutube />
                            </a>
                            <a
                                href="https://wa.me/+916284667127"
                                className="social-icon whatsapp"
                                aria-label="WhatsApp"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaWhatsapp />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-section">
                        <h3>त्वरित लिंक</h3>
                        <ul>
                            <li><a href="#home">मुखपृष्ठ</a></li>
                            <li><a href="#cources">पाठ्यक्रम</a></li>
                            <li><a href="#library">पुस्तकालय</a></li>
                            <li><a href="#notices">सूचनाएँ</a></li>
                            <li><a href="#contact">शंका समाधान एवं सम्पर्क</a></li>
                        </ul>
                    </div>

                    {/* Courses */}
                    <div className="footer-section">
                        <h3>पाठ्यक्रम</h3>
                        <ul>
                            <li><a href="#ved">वेद</a></li>
                            <li><a href="#vedang">वेदांग</a></li>
                            <li><a href="#">उपनिषद्</a></li>
                            <li><a href="#">दर्शनशास्त्र</a></li>
                            <li><a href="#">अन्य आर्षग्रन्थ</a></li>
                            <li><a href="#">राष्ट्रीय पात्रता परीक्षा (संस्कृत 25)</a></li>
                            <li><a href="#">राष्ट्रीय पात्रता परीक्षा (संस्कृत 73)</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-section footer-contact">
                        <h3>Contact Info</h3>
                        <p>
                            <FaEnvelope /> info@aryapathshala.com
                        </p>
                        <p>
                            <FaPhone /> +91 62846-67127
                        </p>
                        <p>
                            <FaMapMarkerAlt /> .....
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom p-3">
                    <p>
                        &copy; 2025 <strong><a href="#">Arya Pathshala</a></strong>. All rights reserved. | Developed & Maintained by{" "}
                        <a
                            href="https://officialsurajarya.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: "var(--text-color)",
                                textDecoration: "none",
                                fontWeight: "900",
                            }}
                        >
                            Suraj Arya
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

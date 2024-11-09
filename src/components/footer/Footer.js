import React from 'react';
import './Footer.css';
import facebook from '../../assets/img/facebook.png';
import youtube from '../../assets/img/youtube.png';
import instagram from '../../assets/img/instagram.png';
import twitter from '../../assets/img/twitter.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="row">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src={facebook} alt="Facebook" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src={instagram} alt="Instagram" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                    <img src={youtube} alt="YouTube" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src={twitter} alt="Twitter" />
                </a>
            </div>

            <div className="row">
                <ul>
                    <li><a href="/contact">Contact us</a></li>
                    <li><a href="/services">Our Services</a></li>
                    <li><a href="/privacy-policy">Privacy Policy</a></li>
                    <li><a href="/terms">Terms & Conditions</a></li>
                    <li><a href="/career">Career</a></li>
                </ul>
            </div>

            <div className="row">
                &copy; 2021 Inferno - All rights reserved || Designed By: Mahesh
            </div>
        </footer>
    );
};

export default Footer;

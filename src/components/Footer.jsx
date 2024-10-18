import React from 'react';
import './Footer.css'; 
import Net2 from "../images/Net2.gif"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-logo">
          <img className='tmdb' src={Net2} alt="" />
        </div>
        <div className="footer-sections">
          <div className="footer-section">
            <h4>THE BASICS</h4>
            <ul>
              <li>About TMDB</li>
              <li>Contact Us</li>
              <li>Support Forums</li>
              <li>API</li>
              <li>System Status</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>GET INVOLVED</h4>
            <ul>
              <li>Contribution Bible</li>
              <li>Add New Movie</li>
              <li>Add New TV Show</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>COMMUNITY</h4>
            <ul>
              <li>Guidelines</li>
              <li>Discussions</li>
              <li>Leaderboard</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>LEGAL</h4>
            <ul>
              <li>Terms of Use</li>
              <li>API Terms of Use</li>
              <li>Privacy Policy</li>
              <li>DMCA Policy</li>
            </ul>
          </div>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;

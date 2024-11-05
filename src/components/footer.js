// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2023 Your Website. All rights reserved.</p>
      <div className="social-media">
        <a href="https://youtube.com/@tonofgem">Youtube</a>
        <a href="https://x.com/tonOfGem">Twitter</a>
        <a href="https://www.tiktok.com/@tonofgem">TikTok</a>
      </div>
    </footer>
  );
};

export default Footer;

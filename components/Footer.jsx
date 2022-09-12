import React from 'react';
import { AiOutlineTwitter, AiOutlineWhatsApp } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Snikas. All Rights Reserved</p>
      <a href="https://ntamiegbe.netlify.app/" target="_blank">NTAMI EGBE</a>
      <p className="icons">
        <AiOutlineTwitter />
        <AiOutlineWhatsApp />
      </p>
    </div>
  );
};

export default Footer;

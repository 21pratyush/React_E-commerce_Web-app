import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import * as FooterStyle from '../../Styles/FooterStyle'
const Footer = () => {
  return (
    <FooterStyle.FooterContainer>
      <p>© 2023 Pratyush Prakhar. All rights reserved.</p>
      <FooterStyle.SocialIconsContainer>
        <FooterStyle.SocialIconLink href="https://www.linkedin.com/in/pratyush-prakhar-149217241/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </FooterStyle.SocialIconLink>
        <FooterStyle.SocialIconLink href="https://github.com/21pratyush" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </FooterStyle.SocialIconLink>
      </FooterStyle.SocialIconsContainer>
    </FooterStyle.FooterContainer>
  );
};

export default Footer;

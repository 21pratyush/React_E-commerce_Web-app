import styled from 'styled-components';

// eslint-disable-next-line 
const primaryColor = '#fff';
const secondaryColor = '#e6e6e6';
const accentColor = '#f50056';

const breakpoints = {
  small: 480,
  medium: 768,
  large: 1024,
};

export const FooterContainer = styled.footer`
  background-color: ${secondaryColor};
  color: black;
  padding: 0;
  text-align: center;
  margin-top: 30%;
  box-shadow: rgba(255, 255, 255, 0.5) 0px 0px 20px;

  /* Responsive styles */
  @media (max-width: ${breakpoints.large}px) {
    margin-top: 20%;
  }

  @media (max-width: ${breakpoints.medium}px) {
    margin-top: 15%;
  }

  @media (max-width: ${breakpoints.small}px) {
    margin-top: 10%;
    padding: 15px;
  }
`;

export const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;

  /* Responsive styles */
  @media (max-width: ${breakpoints.small}px) {
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

export const SocialIconLink = styled.a`
  color: ${accentColor};
  font-size: 2.5em;
  margin: 0 10px;
  transition: color 0.3s;

  &:hover {
    color: #007bff;
  }

  /* Responsive styles */
  @media (max-width: ${breakpoints.large}px) {
    font-size: 2.2em;
  }

  @media (max-width: ${breakpoints.medium}px) {
    font-size: 2em;
  }

  @media (max-width: ${breakpoints.small}px) {
    font-size: 1.8em;
    margin: 5px;
  }
`;

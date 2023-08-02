import styled, { createGlobalStyle } from 'styled-components';

// some color constants
const primaryColor = '#fff';
const secondaryColor = '#e6e6e6';
const accentColor = '#f50056';

//breakpoints for responsive design
const breakpoints = {
  small: 480,
  medium: 768,
  large: 1024,
};

// global style to apply to the whole body
export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #0f0014;
  }
`;

// Styling for the UserStyle div
export const UserStyle = styled.div`
  text-align: center;
  margin-top: 40px;
  width: 50%;
  margin-left: 50%;

  @media (max-width: ${breakpoints.large}px) {
    width: 70%;
    margin-left: 30%;
  }

  @media (max-width: ${breakpoints.medium}px) {
    width: 80%;
    margin-left: 20%;
  }

  @media (max-width: ${breakpoints.small}px) {
    width: 90%;
    margin-left: 5%;
  }
`;

// Styling for the WelcomeContent div
export const WelcomeContent = styled.div`
  padding-left: 2%;
  width: 50%;
  transform: translateY(-110%);

  @media (max-width: ${breakpoints.medium}px) {
    width: 70%;
  }

  @media (max-width: ${breakpoints.small}px) {
    width: 90%;
  }
`;

// Styling for Heading1 (h1)
export const Heading1 = styled.h1`S
  font-size: 36px;
  color: ${primaryColor};
  margin-top: 20px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

// Styling for Paragraph (p)
export const Paragraph = styled.p`
  font-size: 18px;
  color: #444;
  line-height: 1.6;
  padding: 40px;
  width: 80%;
  margin-top: -4%;
  box-shadow: rgba(245, 0, 86, 0.5) 0px 0px 20px;
  border-radius: 2%;
  background-color: ${secondaryColor};
  transition: 0.3s;

  &:hover {
    background-color: ${accentColor};
    color: ${primaryColor};
    box-shadow: rgba(255, 255, 255, 0.5) 0px 0px 20px;
  }

  @media (max-width: ${breakpoints.large}px) {
    padding: 30px;
  }

  @media (max-width: ${breakpoints.medium}px) {
    width: 90%;
    padding: 20px;
  }

  @media (max-width: ${breakpoints.small}px) {
    width: 95%;
    padding: 15px;
  }
`;

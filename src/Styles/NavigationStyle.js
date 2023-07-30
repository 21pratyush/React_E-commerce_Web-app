import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const primaryColor = '#fff';
const secondaryColor = '#e6e6e6';
const accentColor = '#f50056';

const neonLightEffect = css`
  position: relative;
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: ${accentColor};
    box-shadow: 0 0 5px ${accentColor}, 0 0 15px ${accentColor}, 0 0 30px ${accentColor};
  }
`;

const smallScreen = '480px';
const mediumScreen = '768px';
const largeScreen = '1024px';

const NavigationWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1px;
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
  background-color: transparent;
  width: 100%;
  left: 0;
  right: 0;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.2);
  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    background-color: transparent;
  }

  @media (max-width: ${largeScreen}) {
    padding: 10px;
  }

  @media (max-width: ${mediumScreen}) {
    padding: 8px;
  }

  @media (max-width: ${smallScreen}) {
    padding: 6px;
  }
`;

const NavigationLink = styled(Link)`
  text-decoration: none;
  color: ${accentColor};
  background-color: ${secondaryColor};
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 1.2em;

  @media (max-width: ${largeScreen}) {
    font-size: 1em;
    padding: 6px 12px;
  }

  @media (max-width: ${mediumScreen}) {
    font-size: 0.9em;
    padding: 4px 10px;
  }

  @media (max-width: ${smallScreen}) {
    font-size: 0.8em;
    padding: 4px 8px;
  }

  &:hover {
    color: ${primaryColor};
    background-color: ${accentColor};
    ${neonLightEffect};
  }
`;

const CartIndicator = styled.span`
  padding: 2px 6px;
  margin-left: -8px;
  background-color: red;
  color: ${primaryColor};
  font-size: 1em;
  border-radius: 50%;
  position: relative;
  top: -30px;
`;

const CartPageLink = styled(Link)`
  text-decoration: none;
  color: ${accentColor};
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 1.2em;

  @media (max-width: ${largeScreen}) {
    font-size: 1em;
    padding: 6px 12px;
  }

  @media (max-width: ${mediumScreen}) {
    font-size: 0.9em;
    padding: 4px 10px;
  }

  @media (max-width: ${smallScreen}) {
    font-size: 0.8em;
    padding: 4px 8px;
  }

  &:hover {
    ${neonLightEffect};
  }
`;

const StoreIcon = styled.div`
  color: ${accentColor};
`;

export { NavigationWrapper, NavigationLink, CartIndicator, CartPageLink, StoreIcon };

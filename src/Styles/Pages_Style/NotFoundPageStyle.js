import styled from 'styled-components';

const breakpoints = {
  small: 480,
  medium: 768,
  large: 1024,
};

export const GoBackButton = styled.button`
  margin-left: 50%;
  padding: 10px 20px;
  background-color: red;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: ${breakpoints.large}px) {
    margin-left: 40%;
  }

  @media (max-width: ${breakpoints.medium}px) {
    margin-left: 30%;
    padding: 8px 16px;
  }

  @media (max-width: ${breakpoints.small}px) {
    margin-left: 20%;
    padding: 6px 12px;
  }
`;

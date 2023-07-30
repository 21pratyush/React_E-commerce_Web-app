import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa';

const primaryColor = '#fff';
const secondaryColor = '#e6e6e6';
const accentColor = '#f50056';

const breakpoints = {
  small: 480,
  medium: 768,
  large: 1024,
};

export const ProductListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 1.5em;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  margin: 2em;
  padding: 2em;

  @media (max-width: ${breakpoints.small}px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 10px;
  }
`;

export const ProductTitle = styled.h3`
  margin: 10px 0;
  cursor: pointer;
  text-decoration: none;
  color: #000;
  transition: color 0.3s;

  &:hover {
    color: blue;
    text-decoration: underline;
  }

  @media (max-width: ${breakpoints.medium}px) {
    font-size: 24px;
  }

  @media (max-width: ${breakpoints.small}px) {
    font-size: 20px;
  }
`;

export const ProductCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  color: black;
  position: relative;
  transition: transform 0.3s; background-color 0.3s;

  ${ProductTitle} {
    position: relative;

    &:hover::after {
      content: 'View Details';
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      padding: 4px 8px;
      background-color: #000;
      color: #fff;
      font-size: 12px;
      border-radius: 4px;
      opacity: 0;
      transition: opacity 0.3s;
      pointer-events: none;
    }

    &:hover::after {
      opacity: 1;
      top: calc(100% + 5px);
    }
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: rgba(0, 0, 0, 2) 0px 0px 15px;
  }

  @media (max-width: ${breakpoints.medium}px) {
    padding: 8px;
  }

  @media (max-width: ${breakpoints.small}px) {
    padding: 6px;
  }
`;

export const ProductImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  border-radius: 4px;
  overflow: hidden;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`;

export const ProductPrice = styled.p`
  font-weight: bold;
`;

export const StarContainer = styled.div`
  display: inline-block;
  align-items: center;
`;

export const ProductRating = styled.div`
  display: flex;
  align-items: center;
`;

export const RatingText = styled.p`
  margin-bottom: 5px;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

export const StarIcon = styled.span`
  color: ${(props) => (props.active ? '#ffc107' : 'gray')};
  margin-right: 2px;
  font-size: 0.9em;
`;

export const ProductFilterWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  padding: 1.5em;
  margin: 2em;
  box-shadow: rgba(245, 0, 86, 0.5) 0px 0px 20px;

  @media (max-width: ${breakpoints.medium}px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const CategoryFilter = styled.span`
  margin-right: 10px;
  cursor: pointer;
  color: ${(props) => (props.selected ? '#007bff' : 'black')};
  transition: color 0.3s;
  padding: 1%;
  border-radius: 10%;

  &:hover {
    color: ${accentColor};
  }

  @media (max-width: ${breakpoints.medium}px) {
    margin-bottom: 10px;
  }
`;

export const FilterButton = styled.button`
  margin-left: 10px;
  padding: 8px 16px;
  background-color: ${secondaryColor};
  color: ${accentColor};.
  border:none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color:${accentColor};
    color:${primaryColor};
  }
`;

export const FilterAppliedCount = styled.span`
  margin-left: 5px;
  padding: 2px 6px;
  background-color: red;
  color: #fff;
  font-size: 12px;
  border-radius: 25%;
  display: ${(props) => (props.show ? 'inline-block' : 'none')};
`;

export const SearchInput = styled.input`
  /* Add your styles for the search input here */
  padding: 8px 16px;
  border: 1px solid ${accentColor};
  border-radius: 4px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: ${secondaryColor};
  }

  &::placeholder {
    color: ${secondaryColor}; 
  }

  @media (max-width: ${breakpoints.small}px) {
    padding: 6px 12px;
    font-size: .5em;
    margin: .2em;
  }
`;

export const SearchInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const StyledMicrophone = styled.div`
  /* Add the styles from the style attribute here */
  ${props =>
    props.active && ` 
    color:${primaryColor};
    background-color:${accentColor}; 
  `}

  margin-left: 10px;
  margin-right: 5px;
  cursor: pointer;
  font-size: 1.2em;
  border: 3px solid ${accentColor};
  border-radius: 50%;
  padding: 0.3em;
  transition: .8s;
  &:hover{
    border: 2px dashed ${accentColor};
  }

  @media (max-width: ${breakpoints.small}px) {
    font-size: .5em;
    padding: 0.2em;
  }

`;

export const SearchIcon = styled.div`
  top: 50%;
  right: 10px;
  margin: -2px;
  cursor: pointer;
  font-size: 1.3em;
  border-right: 1px solid ${accentColor};
  border-bottom: 1px solid ${accentColor};
  border-top: 1px solid ${accentColor};
  border-bottom-right-radius: 30%;
  border-top-right-radius: 30%;
  padding: 0.2em;
  color: ${primaryColor}; 
  background-color: ${accentColor}; 
  
  &:hover{
    background-color:${secondaryColor};
    color:${accentColor};
  }

  @media (max-width: ${breakpoints.small}px) {
    font-size: .5em;
  }
`;

export const SelectedFilteredArea = styled.div`
  display: list-item;
  padding: 0.2em;
  margin: 2em;
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 10px;
`;

export const RemoveFilterButton = styled.button`
  margin-left: 10px;
  display: ${(props) => (props.show ? 'inline-block' : 'none')};
  color: ${(props) => (props.active ? 'red' : 'black')};
`;

export const RemoveFilterModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 4px;
`;

export const RemoveFilterButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
`;

export const RemoveFilterButtonLabel = styled.label`
  margin-bottom: 5px;
`;

export const RemoveFilterButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

export const RemoveFilterButtonOption = styled.button`
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const RemoveAllFiltersButton = styled.button`
  margin-top: 10px;
  padding: 8px 16px;
  background-color: red;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    background-color: #ff0000;
    transform: scale(1.05);
  }
`;

export const FilterModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const PriceRangeFilter = styled.div`
  margin-bottom: 10px;
`;

export const FilterLabel = styled.label`
  margin-right: 10px;
`;

export const RangeSlider = styled.input`
  width: 100%;
`;

export const StarRatingFilter = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const Star = styled.span`
  color: ${(props) => (props.active ? '#ffc107' : 'gray')};
  cursor: pointer;
  margin-right: 5px;
`;

export const ApplyFiltersButton = styled.button`
  margin-top: 10px;
`;

export const SelectedPriceRange = styled.p`
  margin-top: 10px;
  font-weight: bold;
  display: ${(props) => (props.show ? 'block' : 'none')};
`;

export const SelectedStarRating = styled.p`
  margin-top: 5px;
  display: ${(props) => (props.show ? 'block' : 'none')};
`;

export const NoResult = styled.p`
  margin-top: 20px;
  text-align: center;
  font-weight: bold;
  font-size: 1.5em;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const SelectedFiltersWrapper = styled.div`
  margin-top: 20px;
`;

export const SelectedFiltersTitle = styled.h3`
  margin-bottom: 10px;
`;

export const SelectedFiltersList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const SelectedFilterItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

export const AddToCartButton = styled.button`
  margin-top: 10px;
  padding: 8px 16px;
  background-color: ${(props) => (props.added ? 'lightgreen' : accentColor)};
  color: ${(props) => (props.added ? 'black' : primaryColor)};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const TickIcon = styled(FaCheck)`
  font-size: 1.2em;
  margin-right: 5px;
`;

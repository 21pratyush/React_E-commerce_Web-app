import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa';

const primaryColor = '#fff';
const secondaryColor = '#e6e6e6';
const accentColor = '#f50056';

// Breakpoints for responsive design
const breakpoints = {
  small: 480,
  medium: 768,
  large: 1024,
};

// Styling for the product filter wrapper
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

// Styling for the category filter
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

// Styling for the search input wrapper
export const SearchInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

// Styling for the microphone icon
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

// Styling for the search input
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

// Styling for the cross icon to clear search input
export const CrossIcon = styled.div`
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

// Styling for the search icon to submit search input
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

// Styling for the filter button
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

// Styling for the filter applied count
export const FilterAppliedCount = styled.span`
  margin-left: 5px;
  padding: 2px 6px;
  background-color: red;
  color: #fff;
  font-size: 12px;
  border-radius: 25%;
  display: ${(props) => (props.show ? 'inline-block' : 'none')};
`;

// Styling for the remove filter button
export const RemoveFilterButton = styled.button`
  margin-left: 10px;
  display: ${(props) => (props.show ? 'inline-block' : 'none')};
  color: ${(props) => (props.active ? 'red' : 'black')};
`;

// Styling for the selected filtered area
export const SelectedFilteredArea = styled.div`
  display: list-item;
  padding: 0.2em;
  margin: 2em;
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 10px;
`;

// Styling for the selected price range
export const SelectedPriceRange = styled.p`
  margin-top: 10px;
  font-weight: bold;
  display: ${(props) => (props.show ? 'block' : 'none')};
`;

// Styling for the selected star rating
export const SelectedStarRating = styled.p`
  margin-top: 5px;
  display: ${(props) => (props.show ? 'block' : 'none')};
`;

// Styling for the remove filter modal
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

// Styling for the modal content
export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 4px;
`;

// Styling for the price range filter
export const PriceRangeFilter = styled.div`
  margin-bottom: 10px;
`;

// Styling for the filter label
export const FilterLabel = styled.label`
  margin-right: 10px;
`;

// Styling for the range slider
export const RangeSlider = styled.input`
  width: 100%;
`;

// Styling for the star rating filter
export const StarRatingFilter = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

// Styling for the apply filters button
export const ApplyFiltersButton = styled.button`
  margin-top: 10px;
`;

// Styling for the remove filter button wrapper
export const RemoveFilterButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
`;

// Styling for the remove filter button label
export const RemoveFilterButtonLabel = styled.label`
  margin-bottom: 5px;
`;

// Styling for the remove filter button group
export const RemoveFilterButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

// Styling for the selected filters wrapper
export const SelectedFiltersWrapper = styled.div`
  margin-top: 20px;
`;

// Styling for the remove all filters button
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

// Styling for the product list wrapper
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

// Styling for the product image wrapper
export const ProductImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  border-radius: 4px;
  overflow: hidden;
`;

// Styling for the product image
export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`;

// Styling for the product title
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
// Styling for the ProductCard component
export const ProductCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  color: black;
  position: relative;
  transition: transform 0.3s, background-color 0.3s; /* Transition for transform and background-color properties */

  /* Nested styling for the ProductTitle component within ProductCard */
  ${ProductTitle} {
    position: relative;

    /* Styling for the "View Details" tooltip on hover */
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

    /* Show the "View Details" tooltip on hover */
    &:hover::after {
      opacity: 1;
      top: calc(100% + 5px);
    }
  }
//Styling for the card on hover
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

// Styling for the product price
export const ProductPrice = styled.p`
  font-weight: bold;
`;

// Styling for the product rating
export const ProductRating = styled.div`
  display: flex;
  align-items: center;
`;

// Styling for the star container
export const StarContainer = styled.div`
  display: inline-block;
  align-items: center;
`;

// Styling for the rating text
export const RatingText = styled.p`
  margin-bottom: 5px;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

// Styling for the star icon
export const StarIcon = styled.span`
  color: ${(props) => (props.active ? '#ffc107' : 'gray')};
  margin-right: 2px;
  font-size: 0.9em;
`;

// Styling for the add to cart button
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

// Styling for the tick icon
export const TickIcon = styled(FaCheck)`
  font-size: 1.2em;
  margin-right: 5px;
`;

// Styling for the no result message
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

// Styling for the remove filter button option
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

// Styling for the filter modal
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

// Styling for the star icon
export const Star = styled.span`
  color: ${(props) => (props.active ? '#ffc107' : 'gray')};
  cursor: pointer;
  margin-right: 5px;
`;

// Styling for the selected filters title
export const SelectedFiltersTitle = styled.h3`
  margin-bottom: 10px;
`;

// Styling for the selected filters list
export const SelectedFiltersList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

// Styling for the selected filter item
export const SelectedFilterItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;


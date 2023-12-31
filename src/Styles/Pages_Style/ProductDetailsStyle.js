// Import styled-components and react-spring's animated
import styled from 'styled-components';
import { animated } from 'react-spring';

// Define some color constants
const primaryColor = '#fff';
const secondaryColor = '#e6e6e6';
const accentColor = '#f50056';

// Styling for the product details wrapper
export const ProductDetailsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
  padding: 15px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

// Styling for the product image
export const ProductImage = styled.img`
  width: 250px;
  margin-right: 10px;
  margin-top: 50px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin-top: 0;
    margin-bottom: 10px;
  }
`;

// Animated version of the product image using react-spring
export const AnimatedProductImage = animated(ProductImage);

// Styling for the product details container
export const ProductDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2em;
  padding: 15px;
  box-shadow: 0 0 15px rgb(0 0 0 / 40%);
  border-radius: 1%;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

// Styling for the product title
export const ProductTitle = styled.h2`
  margin-bottom: 10px;
`;

// Styling for the product price
export const ProductPrice = styled.p`
  margin-bottom: 10px;
`;

// Styling for the product ratings
export const ProductRatings = styled.p`
  margin-bottom: 20px;
`;

// Styling for the product category
export const ProductCategory = styled.p`
  margin-bottom: 10px;
`;

// Styling for the product description
export const ProductDescription = styled.p`
  margin-bottom: 10px;
`;

// Styling for the add to cart button
export const AddToCartButton = styled.button`
  margin-top: 10px;
  padding: 8px 16px;
  background-color: ${props => (props.added ? '#04cc07' : accentColor)};
  color: ${props => (props.added ? secondaryColor : primaryColor)};
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

// Styling for the tick icon
export const TickIcon = styled.span`
  font-size: 1.2em;
  margin-right: 5px;
`;

// Styling for the related products section
export const RelatedProducts_Section = styled.div`
  margin: 20px;
`;

// Styling for the product items wrapper
export const ProductItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
  justify-content: center;
  margin-top: 40px;
`;

// Styling for the product item card
export const ProductItemCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  padding: 15px;
  margin: 10px;
  border: 1px solid #ccc;
  transition: .3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: rgba(245, 0, 86, 0.5) 0px 0px 20px;
  }
`;

// Styling for the product item card image
export const ProductItemCardImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-bottom: 5px;
`;

// Styling for the product item title
export const ProductItemTitle = styled.h4`
  margin-bottom: 5px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

// Styling for the product item price
export const ProductItemPrice = styled.p`
  margin-bottom: 5px;
`;

// Styling for the explore button
export const ExploreButton = styled.button`
  margin-left: 50%;
  padding: 10px 20px;
  background-color: ${primaryColor};
  color: ${accentColor};
  border: 1px solid ${accentColor};
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${accentColor};
    color: ${primaryColor};
    border: none;
  }
`;

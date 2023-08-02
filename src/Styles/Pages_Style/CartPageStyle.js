import styled from 'styled-components';

const primaryColor = '#fff';
const secondaryColor = '#e6e6e6';
const accentColor = '#f50056';

// Breakpoints for responsive
const breakpoints = {
  small: 480,
  medium: 768,
  large: 1024,
};

// Wrapper for the entire CartPage
export const CartPageWrapper = styled.div`
  /* Styles for the CartPage wrapper here */
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  margin: 2em;

  @media (max-width: ${breakpoints.medium}px) {
    margin: 1em;
  }

  @media (max-width: ${breakpoints.small}px) {
    margin: 0.5em;
  }
`;

// Container for each product item in the cart
export const ProductItemCartContainer = styled.div`
  /* Styles for the product cart container here */
  max-height: 400px;
  overflow-y: auto;
  border-radius: 8px;
  margin-bottom: 16px;
  background-color: ${primaryColor};
  padding: 8px;

  /* Styling for the scrollbar */
  scrollbar-width: thin; /* For Firefox */
  scrollbar-color: ${accentColor} ${secondaryColor}; /* For Firefox */
  &::-webkit-scrollbar {
    width: 8px; /* For Chrome, Safari, and Opera */
  }
  &::-webkit-scrollbar-track {
    background: ${secondaryColor}; /* For Chrome, Safari, and Opera */
    border-radius: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${accentColor}; /* For Chrome, Safari, and Opera */
    border-radius: 4px;
  }

  @media (max-width: ${breakpoints.medium}px) {
    max-height: none;
  }
`;

// Box for each product item in the cart
export const ProductItemCartBox = styled.div`
  /* Styles for the product cart box here */
  display: table;
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;

  @media (max-width: ${breakpoints.small}px) {
    margin-bottom: 12px;
  }
`;

// Heading for the shopping cart
export const ShoppingCartHeading = styled.h1`
  text-align: center;
`;

// Heading for each column in the cart items
export const ProductItemHeading = styled.div`
  /* Styles for the product cart headings here */
  display: table-row;
  font-weight: bold;
  color: ${primaryColor};
  background-color: ${accentColor};
`;

// Heading for the "Product" column
export const ProductHeading = styled.div`
  /* Styles for the "Product" heading here */
  display: table-cell;
  padding: 8px;
  border-bottom: 1px solid ${secondaryColor};
`;

// Heading for the "Quantity" column
export const QuantityHeading = styled.div`
  /* Styles for the "Quantity" heading here */
  display: table-cell;
  padding: 8px;
  border-bottom: 1px solid ${secondaryColor};
`;

// Heading for the "Price" column
export const PriceHeading = styled.div`
  /* Styles for the "Price" heading here */
  display: table-cell;
  padding: 8px;
  border-bottom: 1px solid ${secondaryColor};
`;

// Heading for the "Remove" column
export const RemoveHeading = styled.div`
  /* Styles for the "Remove" heading here */
  display: table-cell;
  padding: 8px;
  border-bottom: 1px solid ${secondaryColor};
`;

// Heading for the "Total" column
export const TotalHeading = styled.div`
  /* Styles for the "Total" heading here */
  display: table-cell;
  padding: 8px;
  border-bottom: 1px solid ${secondaryColor};
`;

// Container for each cart item row
export const CartItemContainer = styled.div`
  /* Styles for the cart item container here */
  display: table-row;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
`;

// Container for the product image in the cart
export const ProductImageContainer = styled.div`
  /* Styles for the product image container here */
  display: grid;
  padding: 8px;
  align-items: baseline;
  align-content: stretch;
  justify-content: start;
  justify-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

// Product image in the cart
export const ProductImage = styled.img`
  /* Styles for the product image here */
  max-width: 100px;
  max-height: 100px;
`;

// Product title in the cart
export const ProductTitle = styled.div`
  /* Styles for the product title here */
  color: ${accentColor};
  font-size: 18px;
  margin-bottom: 8px;

  @media (max-width: ${breakpoints.small}px) {
    font-size: 16px;
  }
`;

// Container for the quantity in the cart
export const QuantityContainer = styled.div`
  /* Styles for the quantity container here */
  display: table-cell;
  padding: 8px;
`;

// Button to change the quantity in the cart
export const QuantityButton = styled.button`
  /* Styles for the quantity button here */
  background-color: ${secondaryColor};
  border: 1px solid black;
  color: black;
  padding: 2px 4px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: ${accentColor};
    color: ${primaryColor};
    border: 1px solid ${primaryColor};
  }

  @media (max-width: ${breakpoints.small}) {
    padding: 0;
  }

  @media (max-width: ${breakpoints.medium}) {
    padding: 0;
  }
`;

// Text for the quantity in the cart
export const QuantityText = styled.span`
  font-size: 20px;
  margin: 2px;

  @media (max-width: ${breakpoints.small}) {
    font-size: 10px;
    margin: 0.5px;
  }

  @media (max-width: ${breakpoints.medium}) {
    font-size: 5px;
    margin: 1px;
  }
`;

// Container for the product price in the cart
export const ProductPrice = styled.div`
  /* Styles for the product price here */
  display: table-cell;
  padding: 8px;
`;

// Button to remove the item from the cart
export const RemoveButton = styled.button`
  /* Styles for the remove button here */
  background-color: ${accentColor};
  color: ${primaryColor};
  border: none;
  padding: 4px 8px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #e7004c;
  }
`;

// Container for the total cost in the cart
export const TotalCost = styled.div`
  /* Styles for the total cost here */
  display: table-cell;
  padding: 8px;
`;

// Container for the empty cart message
export const EmptyCartMessageContainer = styled.div`
  /* Styles for the empty cart message container here */
  display: grid;
  justify-content: center;
  justify-items: center;
  align-items: center;
  height: 150px;
`;

// Text for the empty cart message
export const EmptyCartMessageText = styled.div`
  /* Styles for the empty cart message text here */
  text-align: center;
  font-size: 18px;
  color: ${accentColor};
`;

// Box for the total amount in the cart
export const TotalAmountBox = styled.div`
  /* Styles for the total amount box here */
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${breakpoints.small}px) {
    padding: 8px;
  }
`;

// Title for the total amount in the cart
export const TotalAmountTitle = styled.div`
  /* Styles for the total amount title here */
`;

// Value for the total amount in the cart
export const TotalAmountValue = styled.div`
  /* Styles for the total amount value here */
`;

// Button to proceed to checkout
export const CheckoutButton = styled.button`
  /* Styles for the checkout button here */
  background-color: ${accentColor};
  color: ${primaryColor};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: ${primaryColor};
    color: black;
    border: 1px solid ${accentColor};
  }

  margin-top: 16px;

  @media (max-width: ${breakpoints.small}px) {
    padding: 8px 16px;
  }
`;

// Button to continue shopping
export const ContinueShoppingButton = styled.button`
  /* Styles for the continue shopping button here */
  background-color: ${primaryColor};
  color: black;
  border: 1px solid ${accentColor};
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;
  margin: 20px;

  &:hover {
    background-color: ${accentColor};
    color: ${primaryColor};
  }
`;

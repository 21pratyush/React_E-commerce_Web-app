import React, { useContext } from 'react';
import { CartContext } from '../../Contexts/CartContext';
import { useSpring, animated } from 'react-spring';
import { RiShoppingCartLine, RiShoppingCart2Line, RiShoppingBasketLine } from 'react-icons/ri';
import { BsPlus, BsDash } from 'react-icons/bs';
import * as CartPageStyle from '../../Styles/Pages_Style/CartPageStyle';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { RiDeleteBin6Line } from 'react-icons/ri';

const CartPage = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeItem } = useContext(CartContext);
  const navigate = useNavigate();

  const handleIncreaseQuantity = (item) => {
    increaseQuantity(item);
  };

  const handleDecreaseQuantity = (item) => {
    if (item.quantity === 1) {
      removeItem(item);
    } else {
      decreaseQuantity(item);
    }
  };

  const handleRemoveItem = (item) => {
    removeItem(item);
  };

  const calculateTotalCost = () => {
    let total = 0;
    cartItems.forEach((item) => {
      const itemPrice = parseFloat(item.price);
      const itemQuantity = parseFloat(item.quantity);
      if (!isNaN(itemPrice) && !isNaN(itemQuantity)) {
        total += itemPrice * itemQuantity;
      }
    });
    return total.toFixed(2);
  };

  const handleContinueShopping = () => {
    navigate(-1);
  };

  const handleProceedToCheckout = () => {
    navigate('/Checkout');
  };

  const emptyCartAnimation = useSpring({
    opacity: cartItems.length === 0 ? 1 : 0,
    transform: cartItems.length === 0 ? 'translateY(0)' : 'translateY(-20px)',
    config: { tension: 200, friction: 10 },
  });
  const emptyCartIcons = [<RiShoppingCartLine size={64} />, <RiShoppingCart2Line size={64} />, <RiShoppingBasketLine size={64} />];

  return (
    <>
      <CartPageStyle.CartPageWrapper>
        <CartPageStyle.ProductItemCartContainer>
          <CartPageStyle.ProductItemCartBox>
            <CartPageStyle.ShoppingCartHeading>Shopping Cart</CartPageStyle.ShoppingCartHeading>
            {cartItems.length > 0 ? (
              <>
                <CartPageStyle.ProductItemHeading>
                  <CartPageStyle.ProductHeading>Product</CartPageStyle.ProductHeading>
                  <CartPageStyle.QuantityHeading>Quantity</CartPageStyle.QuantityHeading>
                  <CartPageStyle.PriceHeading>Price</CartPageStyle.PriceHeading>
                  <CartPageStyle.RemoveHeading>Remove</CartPageStyle.RemoveHeading>
                  <CartPageStyle.TotalHeading>Total</CartPageStyle.TotalHeading>
                </CartPageStyle.ProductItemHeading>
                {cartItems.map((item) => (
                  <CartPageStyle.CartItemContainer key={item.id}>
                    <CartPageStyle.ProductImageContainer>
                      <Link to={{ pathname: `/ProductDetails/${item.title}`, state: { item } }}>
                        <CartPageStyle.ProductImage src={item.image} alt={item.title} />
                        <CartPageStyle.ProductTitle>{item.title}</CartPageStyle.ProductTitle>
                      </Link>
                    </CartPageStyle.ProductImageContainer>
                    <CartPageStyle.QuantityContainer>
                      {/* Using the animated icon buttons */}
                      <CartPageStyle.QuantityButton  onClick={() => handleDecreaseQuantity(item)}>
                        <BsDash size={12} />
                      </CartPageStyle.QuantityButton>
                      <CartPageStyle.QuantityText>{item.quantity}</CartPageStyle.QuantityText>
                      <CartPageStyle.QuantityButton onClick={() => handleIncreaseQuantity(item)}>
                        <BsPlus size={12} />
                      </CartPageStyle.QuantityButton>
                    </CartPageStyle.QuantityContainer>
                    <CartPageStyle.ProductPrice>Rs. {parseFloat(item.price).toFixed(2)}</CartPageStyle.ProductPrice>
                    <CartPageStyle.RemoveButton onClick={() => handleRemoveItem(item)}>
                      <RiDeleteBin6Line size={18} />
                    </CartPageStyle.RemoveButton>
                    <CartPageStyle.TotalCost>Rs. {(item.price * item.quantity).toFixed(2)}</CartPageStyle.TotalCost>
                  </CartPageStyle.CartItemContainer>
                ))}
              </>
            ) : (
              <animated.div style={emptyCartAnimation}>
                <CartPageStyle.EmptyCartMessageContainer>
                  {/* Randomly selecting an empty cart icon from the array */}
                  {emptyCartIcons[Math.floor(Math.random() * emptyCartIcons.length)]}
                  <CartPageStyle.EmptyCartMessageText>Your cart is empty</CartPageStyle.EmptyCartMessageText>
                </CartPageStyle.EmptyCartMessageContainer>
              </animated.div>
            )}
          </CartPageStyle.ProductItemCartBox>
        </CartPageStyle.ProductItemCartContainer>
        <CartPageStyle.TotalAmountBox>
          <CartPageStyle.TotalAmountTitle>Total Amount</CartPageStyle.TotalAmountTitle>
          <CartPageStyle.TotalAmountValue>Rs. {calculateTotalCost()}</CartPageStyle.TotalAmountValue>
          <CartPageStyle.CheckoutButton onClick={handleProceedToCheckout}>
            Proceed to Checkout
          </CartPageStyle.CheckoutButton>
        </CartPageStyle.TotalAmountBox>
      </CartPageStyle.CartPageWrapper>

      <CartPageStyle.ContinueShoppingButton onClick={handleContinueShopping}>
        Continue Shopping
      </CartPageStyle.ContinueShoppingButton>
    </>
  );
};

export default CartPage;

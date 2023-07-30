import React, { useContext } from 'react';
import { useSpring, animated } from 'react-spring'; // Import the necessary components from react-spring
import { CartContext } from '../../Contexts/CartContext';
import * as NavigationStyle from '../../Styles/NavigationStyle';
import { RiShoppingCartLine } from 'react-icons/ri';
import { RiStore2Line } from 'react-icons/ri'; // Import the store icon
import { Link } from 'react-router-dom'; // Import the Link component

const Navigation = () => {
  const { cartItems } = useContext(CartContext);

  // Define the wobble animation
  const springProps = useSpring({
    from: { transform: 'translateY(-50px)', opacity: 0 },
    to: { transform: 'translateY(0)', opacity: 1 },
    config: { tension: 10, friction: 4 },
    loop: true
  });

  return (
    <>
      <NavigationStyle.NavigationWrapper>
        <Link to="/"> {/* Wrap the store icon with the Link component */}
          <animated.div style={springProps}>
            <NavigationStyle.StoreIcon>
              <RiStore2Line size={60} />
            </NavigationStyle.StoreIcon>
          </animated.div>
        </Link>
        {/* Use NavLink instead of Link and add the activeClassName prop */}
        <NavigationStyle.NavigationLink to="/">
          Home
        </NavigationStyle.NavigationLink>
        <NavigationStyle.NavigationLink to="/ProductListing">
          Products
        </NavigationStyle.NavigationLink>
        <NavigationStyle.CartPageLink to="/CartPage">
          <RiShoppingCartLine size={40} />
          {cartItems.length > 0 && <NavigationStyle.CartIndicator>{cartItems.length}</NavigationStyle.CartIndicator>}
        </NavigationStyle.CartPageLink>
      </NavigationStyle.NavigationWrapper>
    </>
  );
};

export default Navigation;

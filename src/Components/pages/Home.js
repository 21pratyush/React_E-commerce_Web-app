import React from 'react';
import { useSpring, animated } from 'react-spring';
import { FaUserSecret } from 'react-icons/fa'; // Import the FaUserSecret icon from the Font Awesome pack
import * as HomeStyle from '../../Styles/HomeStyle';

const Home = () => {
  const animationProps = useSpring({
    from: { opacity: 1, transform: 'translateX(-50%)' },
    to: { opacity: 0, transform: 'translateX(-40%)' },
    config: { tension: 8, friction: 1 },
    loop: true
  });

  return (
    <>
      <HomeStyle.GlobalStyle />
      <HomeStyle.UserStyle>
        <animated.div style={animationProps}>
          {/* Use the AiOutlineUser icon */}
          <FaUserSecret size={300} color="#fff" />
        </animated.div>
      </HomeStyle.UserStyle>
      <HomeStyle.WelcomeContent>
        <HomeStyle.Heading1>
          Welcome to the E-commerce Web App
        </HomeStyle.Heading1>
        <HomeStyle.Paragraph>
          Explore our wide range of products and enjoy a seamless shopping experience with our user-friendly interface.
          Discover the latest trends and get exclusive deals on your favorite items. Happy shopping!
        </HomeStyle.Paragraph>
      </HomeStyle.WelcomeContent>
    </>
  );
};

export default Home;

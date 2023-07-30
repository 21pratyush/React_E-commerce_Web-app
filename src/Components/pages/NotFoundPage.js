import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { AiOutlineArrowLeft, AiOutlineWarning } from 'react-icons/ai';
import * as NotFoundPageStyle from '../../Styles/NotFoundPageStyle';

const NotFoundPage = () => {
  // Define the animation for the Go Back button
  const buttonAnimation = useSpring({
    from: { opacity: 1, transform: 'translateX(20px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: { tension: 200, friction: 5 },
    loop: true
  });

  const warningAnimation = useSpring({
    from: { opacity: 0, transform: 'scale(0.8)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { tension: 200, friction: 1 },
  });

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <animated.div style={warningAnimation}>
        <AiOutlineWarning size={200} color="red" />
      </animated.div>
      <h1 style={{ fontSize: '28px', color: '#ff0000' }}>404 Page-Not-Found</h1>
      <Link to="/ProductListing">
        {/* Animated Go Back button with icon only */}
        <animated.div style={buttonAnimation}>
          <NotFoundPageStyle.GoBackButton>
            <AiOutlineArrowLeft size={20} />
          </NotFoundPageStyle.GoBackButton>
        </animated.div>
      </Link>
    </div>
  );
};

export default NotFoundPage;

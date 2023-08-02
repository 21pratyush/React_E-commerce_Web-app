import React from 'react';
import { useSpring, animated } from 'react-spring';
import { AiOutlineCode } from 'react-icons/ai';

function Checkout() {
  // animation for the warning icon
  const warningAnimation = useSpring({
    from: { opacity: 1, transform: 'scale(0.2)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { tension: 200, friction: 5 },
  });

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {/* Animated warning icon */}
      <animated.div style={warningAnimation}>
        <AiOutlineCode size={200} color="red" />
      </animated.div>
      <h1 style={{ marginTop: '20px', fontSize: '24px', color: 'red' }}>
        Page Development in Progress
      </h1>
      <p style={{ fontSize: '18px', color: '#333' }}>
        I am working hard to bring you an amazing checkout experience. <br />
        Please check back soon!
      </p>
    </div>
  );
}

export default Checkout;

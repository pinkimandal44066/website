import React from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedNumber = ({ number }) => {
  const { num } = useSpring({
    from: { num: 0 },
    num: number,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  return <animated.div>{num.to(n => n.toFixed(0))}</animated.div>;
};

const Stats = () => {
  return (
    <div>
      <div>
        <h3>Happy Clients</h3>
        <AnimatedNumber number={232} />
      </div>
      <div>
        <h3>Projects</h3>
        <AnimatedNumber number={521} />
      </div>
      <div>
        <h3>Hours Of Support</h3>
        <AnimatedNumber number={1453} />
      </div>
      <div>
        <h3>Hard Workers</h3>
        <AnimatedNumber number={32} />
      </div>
    </div>
  );
};

export default Stats;



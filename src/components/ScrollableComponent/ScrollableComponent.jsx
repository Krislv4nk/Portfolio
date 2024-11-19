
import { animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';


export const ScrollableComponent = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3, 
  });

  return (
    <animated.div
  ref={ref}
  style={{
    transform: inView ? 'scaleY(1)' : 'scaleY(0)',
    transformOrigin: 'top',
    opacity: inView ? 1 : 0,
    transition: 'opacity 0.6s, transform 0.6s',
  }}
>
      {children}
    </animated.div>
  );
}

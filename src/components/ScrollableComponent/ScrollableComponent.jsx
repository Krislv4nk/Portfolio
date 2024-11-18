
import { animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';


export const ScrollableComponent = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5, 
  });

  return (
    <animated.div
  ref={ref}
  style={{
    transform: inView ? 'translateX(0)' : 'translateX(-30px)',
    filter: inView ? 'blur(0)' : 'blur(20px)',
    opacity: inView ? 1 : 0,
    transition: 'opacity 0.3s, transform 0.6s, filter 0.6s',
  }}
>
      {children}
    </animated.div>
  );
}


import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import css from './Header.module.css';
import myPhoto from '../../assets/img/mainPhoto.png';

const AnimatedNavLink = ({ to, title }) => {
  const [hovered, setHovered] = useState(false);

  const linkAnimation = useSpring({
    transform: hovered ? 'scale(1.1)' : 'scale(1)',
    color: hovered ? '#ff6f61' : '#000',
  });

  return (
    <animated.div
      style={linkAnimation}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <NavLink
        className={({ isActive }) => `${css.headerItem} ${isActive ? css.active : ''}`}
        to={to}
        title={title}
      >
        {title}
      </NavLink>
    </animated.div>
  );
};

export const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.wrapper}>
        <img className={css.photo} src={myPhoto} alt="myPhoto" />
        <nav className={css.wrapper}>
          <ul className={css.headerList}>
            <li className={css.linkItem}>
              <AnimatedNavLink to="/" title="About me" />
            </li>
            <li className={css.linkItem}>
              <AnimatedNavLink to="/ProjectsPage" title="Projects" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};






import { Footer } from './Footer/Footer';
import css from './Header.module.css';

export const Header = () => {

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (

<header className={css.header}>
      <Footer />
      <nav className={css.wrapper}>
        <ul className={css.headerList}>
          <li className={css.linkItem}>
            <button
              onClick={() => handleScrollToSection('about')}
              className={css.headerItem}
            >
              About
            </button>
          </li>
          <li className={css.linkItem}>
            <button
              onClick={() => handleScrollToSection('projects')}
              className={css.headerItem}
            >
              Projects
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};



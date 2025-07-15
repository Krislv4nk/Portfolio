


import { useEffect, useState } from 'react';
import { Footer } from './Footer/Footer';
import css from './Header.module.css';

export const Header = () => {
  const [activeSection, setActiveSection] = useState('');

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const sections = ['about', 'projects'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-40% 0px -50% 0px', // активується коли середина секції видима
        threshold: 0.1,
      }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className={css.header}>
      <Footer />
      <nav className={css.wrapper}>
        <ul className={css.headerList}>
          <li className={css.linkItem}>
            <button
              onClick={() => handleScrollToSection('about')}
              className={`${css.headerItem} ${
                activeSection === 'about' ? css.active : ''
              }`}
            >
              About
            </button>
          </li>
          <li className={css.linkItem}>
            <button
              onClick={() => handleScrollToSection('projects')}
              className={`${css.headerItem} ${
                activeSection === 'projects' ? css.active : ''
              }`}
            >
              Projects
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};





import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { useRef, useState, useEffect } from 'react';
import css from './ShowMoreModal.module.css';
import { skills } from '../../../lib/variables/variables.js';
import Icon from '../../AboutContent/Icon/Icon.jsx';
import sprite from '../../../assets/sprite.svg';




export const ShowMoreModal = ({ onClose, item }) => {
  const scrollRef = useRef(null);
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);

 useEffect(() => {
  const simpleBarInstance = scrollRef.current;
  if (!simpleBarInstance) return;

  const scrollEl = simpleBarInstance.getScrollElement(); 

  const handleScroll = () => {
    const atBottom = scrollEl.scrollTop + scrollEl.clientHeight >= scrollEl.scrollHeight - 5;
    setIsScrolledToBottom(atBottom);
  };

  scrollEl.addEventListener('scroll', handleScroll);
  handleScroll();

  return () => scrollEl.removeEventListener('scroll', handleScroll);
}, []);

  if (!item) return null;

  const { name, description, features, tools, links } = item;


    return (
      <div className={css.mainWrapper}>
        <SimpleBar className={css.scrollArea}
          style={{ maxHeight: '100%' }}
          forceVisible="y"
          autoHide={false}
          ref={scrollRef}>
          <div className={css.container}>
            <h2 className={css.title}>{name}</h2>
            <div className={css.linksWrapper}>
                <ul className={css.linksList}>
                    <li className={css.linkItem}><a className={css.links} href={links.live} target="_blank" rel="noreferrer">Live Demo</a></li>
                    <li className={css.linkItem}><a className={css.links} href={links.front} target="_blank" rel="noreferrer">Front-End GitHub</a></li>
                {links.back && <li className={css.linkItem}><a className={css.links} href={links.back} target="_blank" rel="noreferrer">Back-End GitHub</a></li>}
                </ul>
            </div>
            <h3 className={css.subtitle}>Used tools:</h3>
            <ul className={css.toolsList}>
                {tools.map((tool, i) => {
    const skill = skills.find(s => s.name.toLowerCase() === tool.toLowerCase());
    return (
      <li key={i} className={css.toolItem}>
  {skill && (
    <div className={css.tooltipWrapper}>
      <Icon id={skill.iconId} className={css.toolIcon} />
      <span className={css.tooltipText}>{tool}</span>
    </div>
  )}
</li>
    );
  })}
            </ul>
            <h3 className={css.subtitle}>Role: </h3>
            <p className={css.description}>{description}</p>

            <h3 className={css.subtitle}>Features:</h3>
            <ul className={css.featuresList}>
                {features.map((feature, i) => (
                    <li key={i} className={css.featureItem}>{feature}</li>
                ))}
            </ul>

          <button className={css.showLessButton} type='button' title='Show less' onClick={onClose}>Show less</button>
          <div className={`${css.scrollHint} ${isScrolledToBottom ? css.hide : ''}`}>
       {[...Array(3)].map((_, i) => (
    <svg key={i} className={css.svgIcon}>
      <use href={`${sprite}#icon-down`} />
    </svg>
  ))}
            </div>
            </div>
        </SimpleBar>
        </div>
    );
};


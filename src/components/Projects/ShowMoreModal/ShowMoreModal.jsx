import css from './ShowMoreModal.module.css';
import { skills } from '../../../lib/variables/variables.js';
import Icon from '../../AboutContent/Icon/Icon.jsx';
import icons from '../../../assets/symbol-defs.svg';




export const ShowMoreModal = ({ onClose, item }) => {
    if (!item) return null;

    const { name, description, features, tools, role, links } = item;

    return (
        <div className={css.mainWrapper}>
            <button className={css.closeButton} onClick={onClose} title='Close'>
                <svg className={css.repoLinkIcon}>
              <use href={`${icons}#icon-close`}></use>
                </svg></button>
            <h2 className={css.title}>{name}</h2>
            <div className={css.linksWrapper}>
                <h3 className={css.subtitle}>Links:</h3>
                <ul className={css.linksList}>
                    <li className={css.linkItem}><a className={css.link} href={links.live} target="_blank" rel="noreferrer">Live Demo</a></li>
                    <li className={css.linkItem}><a className={css.link} href={links.front} target="_blank" rel="noreferrer">Front-End GitHub</a></li>
                {links.back && <li className={css.linkItem}><a className={css.link} href={links.back} target="_blank" rel="noreferrer">Back-End GitHub</a></li>}
                </ul>
            </div>
            <h3 className={css.subtitle}>Used tools:</h3>
            <ul className={css.toolsList}>
                {tools.map((tool, i) => {
    const skill = skills.find(s => s.name.toLowerCase() === tool.toLowerCase());
    return (
      <li key={i} className={css.toolItem}>
        {skill && (
          <Icon id={skill.iconId} className={css.toolIcon} />
        )}
        {/* <span>{tool}</span> */}
      </li>
    );
  })}
            </ul>
            <h3 className={css.subtitle}>Role: <span className={css.role}>{role}</span></h3>
            <p className={css.description}>{description}</p>

            <h3 className={css.subtitle}>Features:</h3>
            <ul className={css.featuresList}>
                {features.map((feature, i) => (
                    <li key={i} className={css.featureItem}>{feature}</li>
                ))}
            </ul>

            <button className={css.showLessButton} onClick={onClose}>Show less</button>
        </div>
    );
};


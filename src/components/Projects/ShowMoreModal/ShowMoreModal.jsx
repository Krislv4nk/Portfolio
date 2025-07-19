import css from './ShowMoreModal.module.css';
import icons from '../../../assets/symbol-defs.svg';




export const ShowMoreModal = ({ onClose, item }) => {
    if (!item) return null;

    const { name, description, features, tools, role, links } = item;

    return (
        <div className={css.mainWrapper}>
            <button className={css.closeButton} onClick={onClose} >
                <svg className={css.repoLinkIcon}>
              <use href={`${icons}#icon-close`}></use>
                </svg></button>
            <h2 className={css.title}>{name}</h2>

            <h3 className={css.subtitle}>Links:</h3>
            <ul className={css.linksList}>
                <li className={css.linkItem}><a href={links.live} target="_blank" rel="noreferrer">Live Demo</a></li>
                <li className={css.linkItem}><a href={links.front} target="_blank" rel="noreferrer">Front-End GitHub</a></li>
                {links.back && <li className={css.linkItem}><a href={links.back} target="_blank" rel="noreferrer">Back-End GitHub</a></li>}
            </ul>
            <p className={css.role}><strong>Role:</strong> {role}</p>
            <p className={css.description}>{description}</p>

            <h3 className={css.subtitle}>Features:</h3>
            <ul className={css.featuresList}>
                {features.map((feature, i) => (
                    <li key={i} className={css.featureItem}>{feature}</li>
                ))}
            </ul>

            <h3 className={css.subtitle}>Tools:</h3>
            <ul className={css.toolsList}>
                {tools.map((tool, i) => (
                    <li key={i} className={css.toolItem}>{tool}</li>
                ))}
            </ul>

            <button className={css.showLessButton} onClick={onClose} style={{ marginTop: '1rem' }}>Show less</button>
        </div>
    );
};


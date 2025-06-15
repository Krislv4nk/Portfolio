import css from './ShowMoreModal.module.css';
import icons from '../../../assets/symbol-defs.svg';




export const ShowMoreModal = ({ onClose, item }) => {
    if (!item) return null;

    const { name, description, features, tools, role, images, links } = item;

    return (
        <div className={css.mainWrapper}>
            <button onClick={onClose} >
                <svg className={css.repoLinkIcon}>
              <use href={`${icons}#icon-close`}></use>
                </svg></button>
            <h2>{name}</h2>
            <div className={css.imgWrapper}>
                <img className={css.image} src={images.first} alt={`${name} preview 1`} />
                <img className={css.image} src={images.second} alt={`${name} preview 2`} />
            </div>

            <h3>Links:</h3>
            <ul>
                <li><a href={links.live} target="_blank" rel="noreferrer">Live Demo</a></li>
                <li><a href={links.front} target="_blank" rel="noreferrer">Front-End GitHub</a></li>
                {links.back && <li><a href={links.back} target="_blank" rel="noreferrer">Back-End GitHub</a></li>}
            </ul>
            <p><strong>Role:</strong> {role}</p>
            <p>{description}</p>

            <h3>Features:</h3>
            <ul>
                {features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                ))}
            </ul>

            <h3>Tools:</h3>
            <ul>
                {tools.map((tool, i) => (
                    <li key={i}>{tool}</li>
                ))}
            </ul>

            <button onClick={onClose} style={{ marginTop: '1rem' }}>Show less</button>
        </div>
    );
};


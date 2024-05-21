import css from './Footer.module.css';
import icons from '../../assets/img/symbol-defs.svg';


export const Footer = () => {
    return (
        <footer className={css.footer}>
            <h2>Contact me</h2>
            <ul className={css.list}>
              <li><a href="mailto:kristinalev4enko89@gmail.com" title="kristinalev4enko89@gmail.com" className={css.contacts}
                  target="_blank" rel="noopener noreferrer"><svg className={css.icon} width="34" height="34">
                    <use href={`${icons}#icon-gmail`}></use>
                  </svg></a></li>
              <li><a href="https://www.linkedin.com/in/kristina-lev4enko" title="LinkedIn" className={css.contacts}
                  target="_blank" rel="noopener noreferrer"><svg className={css.icon} width="34" height="34">
                    <use href={`${icons}#icon-linkedin2`}></use>
                  </svg></a></li>
              <li><a href="https://t.me/KRISLV4NK" className={css.contacts} title="Telegram" target="_blank"
                  rel="noopener noreferrer"><svg className={css.icon} width="34" height="34">
                    <use href={`${icons}#icon-telegram1`}></use>
                  </svg></a></li>
              <li><a href="https://github.com/Krislv4nk/" className={css.contacts} title="GitHub" target="_blank"
                  rel="noopener noreferrer"><svg className={css.icon} width="34" height="34">
                    <use href={`${icons}#icon-github1`}></use>
                  </svg></a></li>
            </ul></footer>
    )
}
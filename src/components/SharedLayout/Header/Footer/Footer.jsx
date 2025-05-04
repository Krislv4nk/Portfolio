import css from './Footer.module.css';
import icons from '../../../../assets/sprite.svg';


export const Footer = () => {
    return (
        <footer className={css.footer}>
            <ul className={css.list}>
              <li><a href="mailto:kristinalev4enko89@gmail.com" title="kristinalev4enko89@gmail.com" className={css.contacts}
                  target="_blank" rel="noreferrer"><svg className={css.icon}>
                    <use href={`${icons}#icon-gmail`}></use>
                  </svg></a></li>
              <li><a href="https://www.linkedin.com/in/kristina-lev4enko" title="LinkedIn" className={css.contacts}
                  target="_blank" rel="noreferrer"><svg className={css.icon}>
                    <use href={`${icons}#icon-linkedin2`}></use>
                  </svg></a></li>
              <li><a href="https://t.me/KRISLV4NK" className={css.contacts} title="Telegram" target="_blank"
                  rel="noreferrer"><svg className={css.icon}>
                    <use href={`${icons}#icon-telegram`}></use>
                  </svg></a></li>
              <li><a href="https://github.com/Krislv4nk/" className={css.contacts} title="GitHub" target="_blank"
                  rel="noreferrer"><svg className={css.icon}>
                    <use href={`${icons}#icon-github1`}></use>
                  </svg></a></li>
            </ul></footer>
    )
}
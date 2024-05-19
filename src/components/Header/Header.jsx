
// import { Link } from 'react-router-dom';
import icons from '../../assets/img/symbol-defs.svg';
import css from './Header.module.css';

export const Header = () => {

  return (
    <header className={css.header}>
      <button type='button'><svg className={css.arrow}><use href={`${icons}#icon-arrow`}></use></svg></button>
    </header>
  );
};

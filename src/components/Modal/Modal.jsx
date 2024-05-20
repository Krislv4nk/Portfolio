// import { Link } from 'react-router-dom';
import icons from '../../assets/img/symbol-defs.svg';
import css from './Modal.module.css';
export const Modal = ({ onClose }) => {
    return (
        <div className={css.modal}>
            <h1>Modal</h1>
            <button className={css.closeButton} onClick={onClose}><svg className={css.close}>
          <use href={`${icons}#icon-x-mark`}></use>
        </svg></button>
        </div>
    );
}
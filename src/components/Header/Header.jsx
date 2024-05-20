
import icons from '../../assets/img/symbol-defs.svg';
import css from './Header.module.css';
import { StyledEngineProvider } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import { useState } from 'react';
import { Modal } from '../Modal/Modal';

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
   const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <header className={css.header}>
      <button onClick={handleOpenModal} className={css.button} type='button'><svg className={css.menu}><use href={`${icons}#icon-menu`}></use></svg></button>
    <StyledEngineProvider injectFirst>
        <Dialog className={css.dialog}
          open={isModalOpen} onClose={handleCloseModal}
          PaperComponent={() => <Modal onClose={handleCloseModal} />}
        ></Dialog>
      </StyledEngineProvider>
    </header>
  );
};

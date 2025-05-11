

import { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import { ShowMoreModal } from '../ShowMoreModal/ShowMoreModal';
import css from './ProjectsSection.module.css';
import { items } from '../../../lib/variables/variables';



const ProjectsPage = () => {
    const [openShowMore, setOpenShowMore] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const openShowMoreHandler = (item) => {
        setSelectedItem(item);
        setOpenShowMore(true);
    };

    const closeShowMoreHandler = () => {
        setOpenShowMore(false);
        setSelectedItem(null);
    };

    return (
        <div className={css.wrapper}>
            <h3 className={css.title}>Let me show you what I have created</h3>
            <Carousel 
                className={css.carousel}
                autoPlay={false}
                animation="fade"
                indicators={false}
                navButtonsAlwaysVisible={true}
                navButtonsProps={{
                    style: {
                        backgroundColor: 'white',
                        color: 'black',
                        borderRadius: 0,
                        width: '50px',
                        height: '50px',
                        border: 'red 1px solid',
                        bottom: '0',
                        top: 'unset'
                    }
                }}
                swipe={true}
                swipeThreshold={50}
                fullHeightHover={false}
            >
                {
                    items.map((item, i) => (
                        <Item key={i} item={item} openShowMoreHandler={openShowMoreHandler} />
                    ))
                }
            </Carousel>

            <StyledEngineProvider injectFirst>
                <Dialog 
                    open={openShowMore} 
                    onClose={closeShowMoreHandler} 
                    className={css.backdrop}
                    PaperComponent={() => selectedItem ? <ShowMoreModal onClose={closeShowMoreHandler} item={selectedItem} /> : null}
                />
            </StyledEngineProvider>
        </div>
    );
};

const Item = ({ item, openShowMoreHandler }) => {
    return (
        <Paper className={css.paper}>
            <div className={`${css.imgWrapper} ${(item.name === "Camper Club" || item.name === "Food Store") ? css.rowDirection : ''}`}>
                <img className={css.img} src={item.images.first} alt={item.name} />
                <img className={css.img} src={item.images.second} alt={item.name} />
            </div>
            <div className={css.infoWrapper}>
                <h2 className={css.infoTitle}>{item.name}</h2>
                <div className={css.linksWrapper}>
                    <a href={item.links.live} rel="noreferrer" target="_blank" className={css.links} title="View Live Demo">Live Demo</a>
                    <a href={item.links.front} rel="noreferrer" target="_blank" className={css.links} title="View Front-End">Front-End GitHub</a>
                    <a href={item.links.back} rel="noreferrer" target="_blank" className={css.links} title="View Back-End">Back-End GitHub</a>
                </div>
                <Button className={css.button} onClick={() => openShowMoreHandler(item)}>
                    Show more
                </Button>
            </div>
        </Paper>
    );
};

export default ProjectsPage;






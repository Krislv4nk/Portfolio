


import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import css from './ProjectsSection.module.css';
import { items } from '../../../lib/variables/variables';


const ProjectsPage = () => {

    
    
    return (
        <div className={css.wrapper}>
            <h3 className={css.title}>Let me show you what I have created</h3>
            <Carousel 
                className={css.carousel}
                SxPropsTheme={{
                    backgroundColor: 'rgba(0, 0, 0, 0.85)',
                    padding: '60px',
                    borderRadius: '16px',
                    Theme: 'dark',
                    color: 'white',
                  }}
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
                    items.map((item, i) => <Item key={i} item={item} className={css.item}/>)
                }
            </Carousel>
            </div>
    );


}
const Item = (props) => {
    return (
        <Paper className={css.paper} elevation={0}>
            <div className={css.imgWrapper}>
                <img className={css.img} src={props.item.images.first} alt={props.item.name} />
                
                {/* <img className={css.img} src={props.item.images.second} alt={props.item.name} /> */}
            </div>
            <div className={css.infoWrapper}>
                <h2 className={css.infoTitle}>{props.item.name}</h2>
                <div className={css.linksWrapper}>
            <a href={props.item.links.live} rel="noreferrer" target='_blank' className={css.links}>Live Demo</a>
            <a href={props.item.links.front} rel="noreferrer" target='_blank' className={css.links}>Front-End GitHub</a>
                    <a href={props.item.links.back} rel="noreferrer" target='_blank' className={css.links}>Back-End GitHub</a>
                    </div>
            <Button className={css.button}>
                Show more
                </Button>
                </div>
        </Paper>
    )
};

export default ProjectsPage;






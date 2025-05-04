


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
  autoPlay={false}
  animation="slide"
  indicators={false}
  navButtonsAlwaysVisible={true}
  navButtonsProps={{
    style: {
      backgroundColor: 'white',
      color: 'black',
      borderRadius: 0,
      width: '50px',
      height: '50px',
    }
  }}
  swipe={true}
  swipeThreshold={50}
                fullHeightHover={false}
                >
                {/* <img className={css.image} src=""  alt="cover" style={{width: '300px', height: '100px'}} />
                <img className={css.image} src="" alt="cover" style={{width: '300px', height: '100px'}} /> */}
                {
                    items.map((item, i) => <Item key={i} item={item} />)
                }
            </Carousel>
            </div>
    );


}
const Item = (props) => {
    return (
        <Paper className={css.paper}>
            <h2>{props.item.name}</h2>
            <a href={props.item.links.live} rel="noreferrer" target='_blank' className={css.links}>Live Demo</a>
            <a href={props.item.links.front} rel="noreferrer" target='_blank' className={css.links}>Front-End GitHub</a>
            <a href={props.item.links.back} rel="noreferrer" target='_blank' className={css.links}>Back-End GitHub</a>
            <Button className={css.button}>
                Show more
            </Button>
        </Paper>
    )
};

export default ProjectsPage;






import camper from '../../assets/img/camper.png';
import camperA from '../../assets/img/camper-1.png';
import css from './SecondPage.module.css';

const SecondPage = () => {
  return (
    <div className={css.wrapper}>
          
            <h2>CamperClub</h2>
      
      <ul>
        <li><img src={camper} alt="camper" /></li>
        <li><img src={camperA} alt="camper" /></li>
       
      </ul>
            
              <a href="https://krislv4nk.github.io/CamperClub/" rel="noreferrer"
                title="View Live Demo of Phone Book App">Live Demo</a>
              <a href="https://github.com/Krislv4nk/CamperClub" rel="noreferrer"
                title="View Front-End Code on GitHub">Front-End GitHub</a>
          <p >Individual project</p>

          <p >Introducing my latest venture: the premier individual project following my
            graduation from IT school. Meet the
            React-powered camper rental website, complete with Redux integration! Immerse yourself in a seamless
            browsing experience
            as you explore our collection of available campers. From detailed descriptions to captivating visuals, each
            camper page
            offers a glimpse into your next adventure. Plus, with the ability to add your favorite finds to a
            personalized favorites
            list, planning your dream getaway has never been easier. Join us as we redefine the way adventurers connect
            with their
            ideal camper experience. Welcome to a world of exploration, all at your fingertips.

            Key Features:
            - Browse Campers: Users can browse a list of available campers with images, prices, and other details.
            - Camper Details: Each camper has a dedicated page with detailed information, including description,
            location, rating,
            reviews, and specifications.
            - Add to Favorites: Users can add campers to their favorites list and remove them from it.</p>
          <h4 >Tools: </h4>
            <ul>Frontend:
             
                <li>React,</li>
                <li>Redux,</li>
                <li>MUi (Material-UI),</li>
                <li>Axios,</li>
                <li>Formik,</li>
                <li>Yup;</li>
              </ul>
          <p >Duration: 3 weeks</p>
    </div>
  );
};

export default SecondPage;

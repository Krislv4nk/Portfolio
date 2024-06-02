
import icons from '../../assets/img/symbol-defs.svg';
import myFoto from '../../assets/img/foto-1.jpg';
import css from './AboutMe.module.css';
import pdf from '../../assets/img/kristina.pdf';


const AboutMe = () => {
    
    return (
        <div className={css.wrapper}>
                <div className={css.container}>
                      <img className={css.foto} src={myFoto} alt="myFoto" />
            <p className={css.text}>Hello, I'm Kristina, a junior full-stack developer.
                I am eager to wholeheartedly dive into the world of programming.
                My skills and knowledge are constantly evolving, and I'm always
                open to new challenges and opportunities for growth. I dream
                of working in a team and learning from experienced colleagues
                to become a true professional in my field. My goal is to combine my
                creative passion for learning and development to create quality and innovative products.</p></div>
            <h3 className={css.title}>Hard skills</h3>
            <ul className={css.list}>
                <li className={css.item}><svg className={css.icon}>
          <use href={`${icons}#icon-html5`}></use>
            </svg></li>
            <li className={css.item}><svg className={css.icon}>
          <use href={`${icons}#icon-css3`}></use>
            </svg></li>
            <li className={css.item}><svg className={css.iconItem}>
          <use href={`${icons}#icon-javascript`}></use>
            </svg></li>
            <li className={css.item}><svg className={css.iconItem}>
          <use href={`${icons}#icon-reactjs`}></use>
            </svg></li>
            <li className={css.item}><svg className={css.icon}>
          <use href={`${icons}#icon-nodejs`}></use>
            </svg></li>
                <li className={css.item}><svg className={css.icon}>
          <use href={`${icons}#icon-nextjs`}></use>
                </svg></li>
                <li className={css.item}><svg className={css.icon}>
          <use href={`${icons}#icon-typescript`}></use>
                </svg></li>
                <li className={css.item}><svg className={css.icon}>
          <use href={`${icons}#icon-redux`}></use>
                </svg></li>
                <li className={css.item}><svg className={css.icon}>
          <use href={`${icons}#icon-express`}></use>
                </svg></li>
                <li className={css.item}><svg className={css.icon}>
          <use href={`${icons}#icon-git`}></use>
                </svg></li>
                <li className={css.item}><svg className={css.icon}>
          <use href={`${icons}#icon-vscode`}></use>
                </svg></li>
                <li className={css.item}><svg className={css.icon}>
          <use href={`${icons}#icon-figma`}></use>
                </svg></li>
                <li className={css.item}><svg className={css.icon}>
          <use href={`${icons}#icon-postman`}></use>
                </svg></li>
                <li className={css.item}><svg className={css.icon}>
          <use href={`${icons}#icon-jwt`}></use>
                </svg></li>
                <li className={css.item}><svg className={css.icon}>
          <use href={`${icons}#icon-nodemon`}></use>
                </svg></li>
                <li className={css.item}><svg className={css.icon}>
          <use href={`${icons}#icon-axios`}></use>
                </svg></li>
            </ul>
            <h3 className={css.title}>Education</h3>
            
                <iframe className={css.iframe}
                      src={pdf}
                    allow="autoplay"></iframe>
           
        </div>
    )
}
export default AboutMe;
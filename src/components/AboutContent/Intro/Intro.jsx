
import myPhoto from "../../../assets/img/type-foto-5.png";
import css from "./Intro.module.css";


export const Intro = () => {
  
    return (
      <div className={css.container}>
        <div className={css.helloDiv}>
          <h2 className={css.helloTitle}>Hello!</h2>
          <p className={css.text}> I am Kristina, a junior full-stack developer. 
            I am eager to dive wholeheartedly into the world of programming.
            Always open to new challenges and opportunities for growth,
            I dream of working in a team and learning from experienced colleagues
            to become a true professional in my field. My goal is to combine my creative
            passion for learning and development to create high-quality and innovative products.
          </p>
          </div>
        <img className={css.photo} src={myPhoto} alt="myPhoto" />
      </div>
    )
};
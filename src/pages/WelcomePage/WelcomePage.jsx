import { Link } from 'react-router-dom';
import { Container, StyledImage, Title, StyledP, StyledArrow } from './WelcomePage.styled';
import MyFoto from '../../assets/img/photo_2024-05-01_20-32-40.jpg';
import icons from '../../assets/img/symbol-defs.svg';

const WelcomePage = () => {
  return (
    <Container>
      <Title>Welcome!</Title>
      <StyledP>I am Kristina, a Junior Full Stack Developer with experience in HTML, CSS, JavaScript, React, and Node.js.
        Let me show you what I have created.</StyledP>
      <StyledImage src={MyFoto} alt="myFoto" />
      <Link to="/second"><StyledArrow ><use href={`${icons}#icon-arrow`}></use></StyledArrow></Link>
    </Container>

  )
};

export default WelcomePage;

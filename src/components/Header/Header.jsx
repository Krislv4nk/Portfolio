import {
  HeaderContainer,
  Navigation,
  StyledLink,
  
} from './Header.styled';


export const Header = () => {

  return (
    <HeaderContainer>
      <Navigation>
        <StyledLink to="/welcome">
         
          Welcome
        </StyledLink>
        <StyledLink to="/second">
          
          Second
        </StyledLink>

        <StyledLink to="/third">
         
         third
        </StyledLink>
      </Navigation>
    </HeaderContainer>
  );
};

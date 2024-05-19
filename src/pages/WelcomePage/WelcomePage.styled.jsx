import styled from 'styled-components';



export const Container = styled.div`
@media screen and (min-width: 320px) {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
}

@media screen and (min-width: 768px) {
  
}
@media screen and (min-width: 1280px) {
 
padding: 50px;
}
`;

export const Title = styled.h1`
@media screen and (min-width: 320px){
text-align: center;
  margin-bottom: 20px;
  margin-right: 20px;
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
}

  
`;

export const StyledP = styled.p` 
 @media screen and (min-width: 320px) {
text-align: center;
font-size: 20px;
margin-bottom: 20px;
  margin-bottom: 20px;
  margin-right: 20px;
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;

 }`;
export const StyledImage = styled.img`
@media screen and (min-width: 320px) {
 width: 200px;
  height: auto;
  object-fit: cover;
  margin-bottom: 40px;
}
 
`;
export const StyledArrow = styled.svg`
@media screen and (min-width: 320px) {
  width: 20px;
  height: 20px;
  margin-left: 250px;
  stroke: #ffffff;
  filter: drop-shadow(0 0 5px #00baff)
          drop-shadow(0 0 10px #00baff)
          drop-shadow(0 0 20px #00baff)
          drop-shadow(0 0 40px #00baff)
          drop-shadow(0 0 80px #00baff);
          
}
 
`;
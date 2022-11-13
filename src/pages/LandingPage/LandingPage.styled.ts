import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  overflow: hidden;


  background: linear-gradient(180deg, #424DF8 0%, #3D3DD8 27.68%);

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  & *{
     color: #595959;
  }

`;


export const WelcomeHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  h1 {
    padding-bottom: 16px !important;
  }

  p {
    width: 80%;
    margin: 0 auto;
  }


`
export const StepContainer = styled.div`
display: flex;
width: 48%;
justify-content: space-between;
align-items: center;
max-width: 300px;
`


export const GetStartedContainer = styled.div`
`



export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  
`


export const ImageContainer = styled.div`
width: 100%;
height: calc(53vh - 7px);
width: 60%;
margin: auto auto;
/* padding: 10% 0; */

img{
  height: 100%;
  width: 100%;
  object-fit: contain;
}
  
`;

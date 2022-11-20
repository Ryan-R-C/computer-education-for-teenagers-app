import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  padding: 24px 16px;
  background: linear-gradient(180deg, #FFFFFF 0%, #EDEDED 26.99%, #ECECEC 28.17%);

  display: flex;
  /* justify-content: space-evenly; */
  flex-direction: column;
  gap: 25px;

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
width: 90%;
justify-content: center;
align-items: center;
margin: 0 5% 5%;


`

export const TitleContainer = styled.div`
display: flex;
flex-direction: row;
gap: 14px;
align-items: center;

& > :first-child {
  /* width: 100%; */
  margin-right: 20px;
}

& > :last-child {
  width: 100%;
}

`

export const BarContainer = styled.div`
display: flex;
flex-direction: row;
gap: 14px;
align-items: center;
justify-content: center;

& > :first-child {
  width: 90%;
  margin-top: 21px;
}


p{
  margin-top: 5px;
}
`


export const TaskContainer = styled.div`
display: flex;
flex-direction: column;
gap: 22px;
padding-bottom: 5%;
margin-bottom: 100px;
`

export const IconContainer = styled.div`
width: 89px;
height: 89px;
border-radius: 100%;
background: rgba(61, 61, 216, 0.2);
display: flex;
align-items: center;
justify-content: center;

svg {
  filter: drop-shadow(0px 4px 2px rgba(0,0,0,0.25))
}

`

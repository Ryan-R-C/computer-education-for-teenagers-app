import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  background: linear-gradient(180deg, #424df8 0%, #3d3dd8 27.68%);

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  & * {
    color: #595959;
  }
`

export const WelcomeHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 60%;

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

export const GetStartedContainer = styled.div``

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ImageContainer = styled.div`
  width: 100%;
  height: 40vh;
  width: 60%;
  margin: auto auto -5% auto;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`

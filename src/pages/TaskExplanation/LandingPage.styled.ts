import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  width: 100vw;

  overflow: hidden;

  background: linear-gradient(180deg, #ffffff 0%, #ededed 26.99%, #ececec 28.17%);

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  overflow-y: scroll;

  & * {
    color: #595959;
  }
`

export const WelcomeHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  align-items: center;
  padding: 24px 16px;
  flex: 1;

  h1 {
    padding-bottom: 16px !important;
    text-align: center;
  }

  p {
    width: 80%;
    margin: 20px auto;
  }
`
export const StepContainer = styled.div`
  display: flex;
  max-width: 48%;
  justify-content: space-between;
  align-items: center;
  max-width: 300px;
`

export const GetStartedContainer = styled.div`
  width: 100%;
  a {
    width: 100%;
    display: block;

    button {
      margin: 0 auto;
      min-width: 80% !important;
    }
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 33px;
  width: 100%;

  margin-top: auto;
`

export const ImageContainer = styled.div`
  height: 39vh;
  width: 100%;
  padding-top: 24px;

  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  border-radius: 0px 0px 25px 25px;

  * {
    color: white;
    fill: white;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .back {
    margin-left: auto;
  }
`

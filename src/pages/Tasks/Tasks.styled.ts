import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  padding: 24px 16px;

  background: linear-gradient(180deg, #ffffff 0%, #ededed 26.99%, #ececec 28.17%);

  display: flex;
  flex-direction: column;

  & * {
    color: #595959;
  }
`

export const SubContainer = styled.div`
  min-height: calc(-53px + 100vh);
  height: fit-content;
`

export const TaskContainer = styled.div``

export const AnswerContainer = styled.div``

export const ScoreContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  gap: 21px;
  margin-left: 14px;
  font-size: 18px;
`

export const ItemScore = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Question = styled.div`
  margin: 0.1% auto;
  width: 85%;
  height: 33%;
  text-align: center;

  .space {
    margin-bottom: 3em;
  }
`

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 10px;

  img {
    height: 100%;

    object-fit: contain;
    max-width: 80vw;
    max-height: 34vh;
    border-radius: 20px;
  }
`

export const OptionsSelected = styled.div`
  margin-bottom: 50px;
`

export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0.5rem auto;
  justify-content: center;
  gap: 21px;
  padding: 12px 16px;
`

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 481px) {
    width: 48%;
  }

  * {
    width: 80% !important;
    margin: 0 auto;
  }
`

export const ImageOptionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`

export const ResponseContainer = styled.div`
  bottom: 0;
  left: 0;
  margin: 0 -16px;
  padding: 24px 16px 72px;
  position: fixed;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  display: none;

  .messageContainer,
  .messageContainer + .iconsContainer {
    opacity: 0;
    z-index: -1;
    margin-bottom: 2rem;
    margin-right: auto;
    margin-left: auto;
    min-width: 80%;
    max-width: 80%;

    min-height: 2rem;

    display: flex;
    justify-content: space-between;
  }

  * {
    color: white;
  }

  ${(props) => {
    let styled = ''

    if (props?.theme?.includes('show'))
      styled += `
    & {
      display: block;
    }

    .messageContainer,
    .messageContainer + .iconsContainer{
      opacity: 1;
      z-index: 0;
    }
    `

    if (props?.theme?.includes('correct'))
      styled += `
          &{  
            background: linear-gradient(180deg, #192089 0.01%, rgb(25, 32, 137) 100%);
          }
          `
    else if (props?.theme?.includes('wrong'))
      styled += `
          &{
            background: linear-gradient(180deg, rgb(191, 14, 14) 0%, rgb(191, 14, 14) 100%);
          }
          `

    return styled
  }};
`

export const SubmitContainer = styled.div`
  margin: 0 auto;
  margin-top: auto;

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;

  ${(props) => {
    if (props?.theme)
      return `
      position: fixed;
      bottom: 25px;
      left: 0;
      `
  }};

  button {
    z-index: 999;
    align-self: center;
  }

  & * {
    color: white;
  }

  button {
    min-width: 80% !important;
  }
`

import styled from 'styled-components'

export const Button = styled.button`
  align-items: center;

  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: row;
  gap: 10px;
  border-width: 1.5px;
  border-style: solid;
  border-color: #a6a6a6;
  width: 50%;

  position: relative;
  cursor: pointer;

  align-self: flex-start;

  justify-content: center;
  color: #ffffff !important;
  font-size: 16px;

  padding: 8px 16px;

  border-radius: ${(props) => {
    if (props.theme.includes('left')) return `10px 0px 0px 10px;`
    else if (props.theme.includes('right')) return `0px 10px 10px 0px;`
    else return `10px;`
  }};
  ${(props) => {
    if (props.theme.includes('white'))
      return `
                        background-color: #FFFFFF;
                        border-color: #a6a6a6;
                        color: #383838 !important;
                        `
    else
      return `
                        border-color: #424DF8;
                        background-color: #424DF8;
                        color: #FFFFFF !important;
                        `
  }};
`

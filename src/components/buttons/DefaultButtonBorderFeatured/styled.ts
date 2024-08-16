import styled from 'styled-components'

export const Button = styled.button`
  align-items: center;
  background-color: #424df8;
  border: 0px solid black;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: row;
  gap: 10px;
  position: relative;
  cursor: pointer;

  align-self: flex-start;

  justify-content: center;
  color: #ffffff !important;
  font-size: 16px;
  padding: 12px 16px;

  border-radius: ${(props) => {
    if (props.theme === 'left') return `20px 0px 0px 20px;`
    else if (props.theme === 'right') return `0px 20px 20px 0px;`
    else return `20px;`
  }};
`

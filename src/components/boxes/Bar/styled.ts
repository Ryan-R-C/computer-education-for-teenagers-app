import styled from 'styled-components'

export const Bar = styled.div`
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  width: 100%;
  padding: 9px;
  height: 15px;
  background: #bec2fc;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  position: relative;
  overflow: hidden;
`

export const Percentage = styled.div`
  position: absolute;
  z-index: 2;
  border-radius: 50px;
  padding: 20px 0;
  height: 15px;
  left: 0;

  top: 50%;
  transform: translateY(-50%);
  background-color: #424df8;
`

import { createGlobalStyle } from 'styled-components'
import { theme } from './config'

export const GlobalStyle = createGlobalStyle`
* {
  font-family: ${theme.font.family} !important;
  color: #383838;
} 


* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  a {
    all: unset;
  }


  body {
    font-family: ${theme.font.family} !important;
    color: ${theme.colors.darkGray};
  }

p {
  font-size: 16px;
  line-height: 25px;
}

`

export const colors = {
  main: '#424df8',
  secondary: '#BEC2FC',
}

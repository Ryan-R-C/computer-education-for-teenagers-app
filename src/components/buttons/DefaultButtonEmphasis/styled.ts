import styled from 'styled-components';

export const Button = styled.button`
        align-items: center;
        background-color: #424DF8;
        border: 0px solid black;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        display: flex;
        flex-direction: row;
        gap: 20px;
        position: relative;
        cursor: pointer;
        align-self: flex-start;

        justify-content: center;
        color: #FFFFFF !important;
        font-size: 22px;
        padding: 16px 43px;




${(props) => {

  if(!props?.theme)
        return`background-color: #424DF8;`

  else if (props?.theme === ('error'))
          return `
          background-color: #ED0F0F !important;
          `;


  }

};        
`
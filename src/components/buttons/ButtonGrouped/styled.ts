import styled from 'styled-components';

export const Button = styled.button`
        align-items: center;
        
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
        display: flex;
        flex-direction: row;
        gap: 10px;
        border-width: 1px;
        border-style: solid;

        width: 50%;

        max-width: 400px;

        position: relative;
        cursor: pointer;
        
        align-self: flex-start;
        
        justify-content: center;
        padding: 4px 40px;
        color: #FFFFFF !important;
        font-size: 20px;

        border-radius: ${(props) => {
                if(props.theme.includes('left'))
                        return `10px 0px 0px 10px;`;
                else if (props.theme.includes('right'))
                        return `0px 10px 10px 0px;`;
                else 
                        return `10px;`
        }
        };

        ${(props) => {
                if(props.theme.includes('white'))
                        return `
                        background-color: #FFFFFF;
                        border-color: #D9D9D9;
                        color: #383838 !important;
                        `
                else 
                        return `
                        border-color: #424DF8;
                        background-color: #424DF8;
                        color: #FFFFFF !important;
                        `
        }
        };
`
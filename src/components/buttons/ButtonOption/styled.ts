import styled from 'styled-components';

export const Button = styled.button`
        align-items: center;
        
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
        display: flex;
        flex-direction: row;
        gap: 10px;
        border-width: 1px;
        border-style: solid;

        width: fit-content;

        max-width: 400px;

        position: relative;
        cursor: pointer;
        
        align-self: flex-start;
        
        justify-content: center;
        padding: 4px 30px;
        color: #FFFFFF !important;
        font-size: 20px;
        border-radius: 20px;

        ${(props) => {
                
                if(props?.theme?.includes('isSelected'))
                        return `
                        border-color: #424DF8 !important;
                        color: #424DF8 !important;
                        background-color: #FFFFFF !424DF8;
                        `
                else if(props?.theme?.includes('isUnSet'))
                        return `
                        color: #0000 !important;
                        box-shadow: inset 0px 4px 10px rgba(0, 0, 0, 0.25);
                        background-color: #D9D9D9;
                        border: 1px solid #D9D9D9;
                        `
                else 
                        return `
                        background-color: #FFFFFF;
                        border-color: #D9D9D9;
                        color: #383838 !important;


                        &:hover,
                        &:focus
                        {
                                border-color: #424DF8 !important;
                                color: #424DF8 !important;
                                background-color: #FFFFFF !424DF8;
                        }
                        `
        }
        };
`


  /*  */
import styled from 'styled-components';

export const Container = styled.button`
        align-items: center;
        
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
        display: flex;
        flex-direction: row;
        gap: 10px;
        border-width: 1.5px;
        border-style: solid;

        /* width: fit-content; */
        width: 40%;
        height: 100%;

        max-width: 400px;

        /* position: relative; */
        cursor: pointer;
        
        align-self: flex-start;
        flex-direction: column;
        
        justify-content: center;
        color: #FFFFFF !important;
        font-size: 16px;
        border-radius: 20px;
        /* padding: 1%; */
        height: 188px;
        width: 188px;
        padding: 12px 16px;

        
        p {
                height: 10%;
        }

        img {
                border-radius: 20px;
                width: 100%;
                height: 90%;


                /* object-fit: contain; */
                object-fit: cover;
        }

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
                        border-color: #a6a6a6;
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
import styled from "styled-components";

export const Button = styled.button`
        align-items: center;
        background-color: #FFFFFF;
        border-width: 1px;
        border-style: solid;
        border-color: #D9D9D9;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
        display: flex;
        flex-direction: row;
        gap: 10px;
        position: relative;
        align-self: flex-start;
        justify-content: center;
        color: #383838;
        padding: 10px 43px;
        font-size: 20px;
        cursor: pointer;
        
        border-radius: ${(props) => {
                if(props.theme === 'left')
                        return `20px 0px 0px 20px;`;
                else if (props.theme === 'right')
                        return `0px 20px 20px 0px;`;
                else 
                        return `20px;`
        }
        };
    `

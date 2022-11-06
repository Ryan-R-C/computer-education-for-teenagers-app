import styled from "styled-components";

export const Bar = styled.div`
        border-radius: 10px;
        background-color: #FFFFFF;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
        width: 100%;
        padding: .5%;
        height: 15px;
        background: #BEC2FC;
        box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 50px;
        position: relative;
        overflow: hidden;
`

export const Percentage = styled.div`
        position: absolute;
        z-index: 2;
        border-radius: 50px;
        padding: .5% 0;
        height: 15px;
        left:0;

        top: 50%;
        transform: translateY(-50%);
        background-color: #424DF8;
                
`


import styled from "styled-components";

export const HeaderBar= styled.div`
        width: 90%;
        margin: 0 auto 12px auto;
        display: flex;
        flex-wrap: nowrap;

        .icon-container {
                margin-left: -1px;
                margin-right: 14px;
                align-self: center;
        }
`


export const FlexContainer= styled.div`
        width: calc(100% - 3.5rem);
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
`
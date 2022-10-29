import styled from "styled-components";

export const FlexConnection = styled.div`
      display: flex;
      flex-direction: row;
      /* gap: -5px; */
      & > :last-child{
            margin-left: -20px;
      }
  
`
export default FlexConnection;
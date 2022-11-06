import styled from "styled-components";
import { StepProps } from "../../../types";

export const StepDisabled = styled.button`
        cursor: pointer;
        transition: all .3s;

        ${(props: StepProps) => {
                if(!!props?.current)
                        return `
                        width: 60px;
                        height: 40px;
                        border-radius: 50px;
                        background-color: #424DF8;
                        border: 0px solid black;
                        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
                        `
                else 
                        return `
                        width: 40px;
                        height: 40px;
                        border: 0px solid black;
                        border-radius: 100%;
                        background-color: #BEC2FC;
                        box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
                        `
        }
        };

`



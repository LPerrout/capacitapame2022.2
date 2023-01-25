import styled from "styled-components";
import { Colors } from "../../Constants/Theme";

export const InputContainer = styled.div`
    position: relative;
`
export const LabelContainer = styled.label`
    position: absolute;
    margin:15px;

`
export const Icon = styled.img`
    
`

export const Inputin = styled.input`
    border-radius: 10px;
    height: 5vh;
    width: 35vw;
    padding: 14px  0px 14px 100px;
    border: 4px solid;
    border-color: ${Colors.Brown};
    background-color: #0000;
    &::placeholder{
        color: ${Colors.Brown};
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 1.5vw;
        font-weight: bold;
    }
    
`
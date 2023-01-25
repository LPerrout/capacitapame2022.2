import styled from "styled-components";
import { Colors } from '../../Constants/Theme';

export const Buttom = styled.button`
    height: 7vh;
    width: 8vw;
    background-color: #0000;
    color: ${Colors.White};
    border: 0.3vw solid;
    border-color: ${Colors.White};
    border-radius: 10px;
    border-color: ${Colors.White}; 
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-right: 2vw;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    cursor: pointer;
`

export const Tag = styled.h1`
    text-decoration: none;
    font-size: 1.7vw;
    font-weight: bold;
`
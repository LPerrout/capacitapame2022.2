import styled from "styled-components";
import { Colors } from '../../Constants/Theme';

export const Carddiv = styled.div`
    height: 66vh;
    width: 22vw;
    background-color: ${Colors.Brown};
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    border: 3px solid ${Colors.Brown};
`

export const Prizediv = styled.div`
    background-color: green;
    width: 100%;
    height: 20%;
    background-color: ${Colors.White};
    flex-direction: column;
    max-width: 100%;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    align-items: center;
    font-weight: bold;
    text-align: center;
    color: ${Colors.Brown};
`

export const Button = styled.button`
    width: 100%;
    height: 14.8%;
    border-radius: 8px;
    background-color: ${Colors.Brown};
    border-color: #0000;
    cursor: pointer;
    font-size: 2.5vw;
    color: ${Colors.White};
    border-color: ${Colors.Brown};
    font-weight: bold;
`

export const Imageproduct = styled.img`
    width: 100%;
    height: 65%;
    border-radius: 8px;
`
export const TextPrice = styled.div`
   font-weight: bold;
   font-size: 1.8vw;
`
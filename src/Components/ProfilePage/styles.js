import styled from "styled-components";
import { Colors } from "../../Constants/Theme";

export const Body = styled.div`
    width: 100vw;
    min-height: 86.5vh;
    display: flex;
    align-items: center;
    background-color: ${Colors.White};
    justify-content: space-evenly;
`
export const ProfileImg = styled.img`
    width: 30vw;
    border-radius: 50%;
    border: 5px solid;
    border-color: ${Colors.Brown};
`
export const DivText = styled.div`
    flex-direction: column;
    max-width: 40%;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.6vw;
    font-weight: bold;
    color: ${Colors.Brown};
    justify-content: center;
    line-height: 350%;
`

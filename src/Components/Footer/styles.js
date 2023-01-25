import styled from "styled-components";
import { Colors } from '../../Constants/Theme';

export const Foot = styled.div`
    width: 100vw;
    min-height: 58vh;
    background-color: ${Colors.Brown};
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const Textdiv = styled.div`
    flex-direction: column;
    max-width: 40%;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.6vw;
    font-weight: bold;
    color: ${Colors.White};
    text-align: center;
    justify-content: center;
`
export const Textdiv3 = styled.div`
    flex-direction: column;
    max-width: 40%;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.6vw;
    font-weight: bold;
    color: ${Colors.White};
    justify-content: center;`

export const Textdiv2 = styled.div`
    flex-direction: column;
    max-width: 100%;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.6vw;
    font-weight: bold;
    text-align: center;
    color: ${Colors.White};

`
export const Textdiv4 = styled.div`
    flex-direction: column;
    max-width: 100%;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.6vw;
    font-weight: bold;
    color: ${Colors.White};
    justify-content: center;`


export const Iconsdiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 3.2vh;
`

export const Logo = styled.img`
    margin-bottom:2.5vh;
    width: 20vw;
    height: 16vh;
`
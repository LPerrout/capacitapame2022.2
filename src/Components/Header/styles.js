import styled from "styled-components";
import { Colors } from '../../Constants/Theme';

export const Head = styled.div`
    width: 100vw;
    min-height: 13.5vh;
    background-color: ${Colors.Brown};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const Logo = styled.img`
    margin-left: 2%;
    width: 12vw;
`

export const Butdiv = styled.div`
    display: flex;
`
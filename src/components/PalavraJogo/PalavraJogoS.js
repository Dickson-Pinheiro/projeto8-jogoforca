import styled from "styled-components"

const PalavraJogoS = styled.p`
    font-size: 50px;
    visibility: ${props => props.palavra ? "visible": "hidden"};
    font-weight: 700;
    color: ${props => props.color};
    letter-spacing: 3px;
`

export {PalavraJogoS};
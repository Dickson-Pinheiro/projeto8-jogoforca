import styled from "styled-components";

const LetraS = styled.p`
    width: 40px;
    height: 40px;
    color: black;
    font-size: 16px;
    background-color: ${ (props => props.ativo ? "#E1ECF4": "#798A9F")};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

export {LetraS}
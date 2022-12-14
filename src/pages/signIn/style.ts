import styled from "styled-components";

export const Container = styled.div `
    height: 100vh;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: ${props => props.theme.colors.primary};

`;

export const Logo = styled.div `
    display: flex;
    align-items: center;

    margin-bottom: 30px;

    > h2 {
        color: ${props => props.theme.colors.white};
        margin-left: 7px;
    }
`;

export const Form = styled.form `
    width: 250px;
    height: 250px;

    padding: 30px;

    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 10px;
    background-color: ${props => props.theme.colors.tertiary};

`;

export const FormTitle = styled.h1 `
    color: ${props => props.theme.colors.white};

    &:after {
        content: '';
        display: block;
        width: 55px;
        margin: 0 auto;
        border-bottom: 10px solid ${props => props.theme.colors.warning}
    }
`;

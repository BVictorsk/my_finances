import styled from 'styled-components';

export const Container = styled.div `
    width: 40%;
    height: 180px;

    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.white};

    border-radius: 9px;

    margin: 10px 0;
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > header img {
        width: 30px;
        margin-left: 10px;
    }

    >header p {
        font-size: 20px;
    }
`;

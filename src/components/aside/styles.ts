import styled from 'styled-components';

export const Container = styled.div `
    grid-area: AS;
    background-color: ${props => props.theme.colors.secondary};
    padding-left: 20px;
    border-right: 1px solid ${props => props.theme.colors.gray};
`;

export const Header = styled.header `
    display: flex;
    align-items: center;
`;

export const LogoImg = styled.img `
    height: 40px;
    width: 40px;
`;

export const Title = styled.h3 `
    color: ${props => props.theme.colors.white};
    margin-left: 10px;
`;

export const MenuContainer = styled.nav `
    display: flex;
    flex-direction: column;

    margin-top: 15px;
`;

export const MenuItemLink = styled.a `
    display: flex;
    align-items: center;

    color: ${props => props.theme.colors.white};
    text-decoration: none;

    margin: 7px 0;

    transition: opacity .3s;

    &:last-child {
        color: ${props => props.theme.colors.warning}
    }

    &:hover {
        opacity: .65;
    }

    > svg {
        font-size: 15px;
        margin-right: 10px;
    }
`;


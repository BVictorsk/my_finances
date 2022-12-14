import styled from "styled-components";

interface ITagProps {
    color: string;
}

export const Container = styled.li `
    background-color: ${props => props.theme.colors.secondary};

    list-style: none;
    border-radius: 5px;

    margin: 10px 0;
    padding: 12px 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    cursor: pointer;
    transition: all 0.3s;

    position: relative;

    &:hover{
        opacity: .7;
        transform: translateX(10px);
    }

    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`;

export const Tag = styled.div<ITagProps> `
    width: 10px;
    height: 50% ;

    background-color: ${props => props.color};

    position: absolute;
    left: 0;
`;
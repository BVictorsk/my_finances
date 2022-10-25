import styled from 'styled-components';

interface ILegendProps {
    color: string,
}

export const Container = styled.div `
    width: 55%;
    height: 240px;

    margin: 10px 0;
    
    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.white};

    border-radius: 9px;

    display: flex;
`;

export const SideLeft = styled.aside `
    padding: 30px 15px;
`;

export const LegendContainer = styled.ul `
    list-style: none;
`;

export const Legend = styled.li<ILegendProps> `
    display: flex;
    align-items: center;

    margin: 7px 0;


    > div {
        background-color:${props => props.color};

        width: 30px;
        height: 30px;

        border-radius: 20px;

        font-size: 13px;
        line-height: 30px;
        text-align: center
    }

    > span {
        margin-left: 5px;
    }
`;

export const SideRight = styled.main `

`;



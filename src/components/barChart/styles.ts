import styled from 'styled-components';

interface ILegendProps {
    color: string,
}

export const Container = styled.div `
    width: 48.5%;
    min-height: 260px;

    margin: 10px 0;

    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};

    border-radius: 12px;

`;

export const SideLeft = styled.aside `
    padding: 30px 20px;

    > h2{
        margin-bottom: 10px;
    }
`;

export const SideRight = styled.main `
    flex: 1;
    height: 200px;

    display: flex;
    justify-content: center;
    padding-top: 35px
`;

export const LegendContainer = styled.ul `
    list-style: none;

    height: 20px;
    padding-right: 15px;
`;

export const Legend = styled.li<ILegendProps> `
    display: flex;
    align-items: center;

    margin: 7px 0;


    > div {
        background-color:${props => props.color};

        width: 60px;
        height: 30px;

        border-radius: 15px;

        font-size: 13px;
        line-height: 30px;
        text-align: center
    }

    > span {
        margin-left: 5px;
    }
`;
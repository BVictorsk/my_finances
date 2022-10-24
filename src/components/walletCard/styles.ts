import styled from 'styled-components'

interface IContainerprops {color: string;}

export const Container = styled.div<IContainerprops> `
    width: 29%;
    height: 150px;

    margin: 10px 0;

    background-color: ${props => props.color};
    color: ${props => props.theme.colors.white};

    border-radius: 25px;
    padding: 10px 20px;

    position: relative;
    overflow: hidden;

    > img {
        height: 110%;

        position: absolute;
        top: -10px;
        right: -30px;
        
        opacity: .3;
    }

    > span {
        font-size: 20px;
        font-weight: 700;
    }

    > small {
        font-size: 12px;
        position: absolute;
        bottom: 10px;
    }


`;

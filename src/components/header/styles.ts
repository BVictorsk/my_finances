import styled from 'styled-components';

export const Container = styled.div `
      width: 100%;

      display: flex;
      justify-content: space-between;

      margin-bottom: 20px;

`;

export const TitleContainer = styled.div `
      > h1 {
        color: ${props => props.theme.colors.white};
      }
`;

export const Controllers = styled.div `
`;
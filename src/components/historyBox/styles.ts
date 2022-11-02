import styled, { keyframes } from 'styled-components';

interface ILegendProps {
  color: string;
}

const animate = keyframes`
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }
  50% {
    opacity: .3;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.white};
  margin: 10px 0;
  padding: 30px 20px;
  border-radius: 10px;
  animation: ${animate} 0.5s;
`;

export const ChartContainer = styled.div`
  height: 275px;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  > h2 {
    margin-bottom: 10px;
    padding-left: 8px;
  }
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const Legend = styled.ul<ILegendProps>`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  margin-left: 5px;
  > div {
    background-color: ${(props) => props.color};
    font-size: 15px;
    line-height: 60px;
    text-align: center;
    width: 30px;
    height: 10px;
    border-radius: 10px;
  }
  > span {
    margin-left: 5px;
  }
  @media (max-width: 1280px) {
    > div {
      width: 30px;
      height: 30px;
    }
  }
`;

export const LegendContainer = styled.li`
  list-style: none;
  display: flex;
  padding-right: 18px;
`;
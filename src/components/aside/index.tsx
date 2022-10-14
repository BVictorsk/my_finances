import React from 'react';
import logoImg from '../../assets/logo.svg'
import { Container, Header, LogoImg, MenuContainer, MenuItemLink, Title } from './styles'
import { MdSpaceDashboard, MdOutlineLogout } from "react-icons/md";
import { GiReceiveMoney, GiExpense } from "react-icons/gi";

const Aside: React.FC = () => {
    return (    
        <Container>
            <Header>
                <LogoImg src={logoImg} alt="My fanances logo" />
                <Title>Minhas finanças</Title>
            </Header>

            <MenuContainer>

                <MenuItemLink href="/dashboard">
                    <MdSpaceDashboard />
                    Dashboard
                </MenuItemLink>

                <MenuItemLink href="/list/income">
                    <GiReceiveMoney />
                    Entradas
                </MenuItemLink>

                <MenuItemLink href="/list/expense">
                    <GiExpense />
                    Saídas
                </MenuItemLink>

                <MenuItemLink href="#">
                    <MdOutlineLogout />
                    Sair
                </MenuItemLink>

            </MenuContainer>
        </Container>
    );
  }
  
  export default Aside;
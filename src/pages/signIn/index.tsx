import React from 'react'
import logoImg from "../../assets/logo.svg"

import Input from '../../components/input';

import { Container, Logo, Form, FormTitle } from "./style"

const SignIn: React.FC = () => {
    return (    
        <Container>
            <Logo>
                <h2>My Wallet</h2>
            </Logo>

            <Form onSubmit={() => {}}>
                <FormTitle>Entrar</FormTitle>

                <Input 
                    type="email"
                    placeholder="E-mail" 
                    required
                />
                <Input 
                    type="password"
                    placeholder="Senha" 
                    required
                />

                
                <button type="submit">Acessar</button>
            </Form>
        </Container>
    );
}

export default SignIn;
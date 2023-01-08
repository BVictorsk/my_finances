import React from 'react'
import Input from '../../components/input';
import Button from '../../components/button';

import { Container, Logo, Form, FormTitle } from "./style"

const SignIn: React.FC = () => {
    return (    
        <Container>
            <Logo>
                <h2>My Finances</h2>
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

                
                <Button type="submit">Acessar</Button>
            </Form>
        </Container>
    );
}

export default SignIn;
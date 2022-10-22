import React from 'react'
import Header from '../../components/header'
import SelectInput from '../../components/selectInput'
import { Container } from './styles'

const Dashboard: React.FC = () => {
    const options = [
        { value: 'Brian', label: 'Brian' },
        { value: 'Brian', label: 'Brian' }
    ]

    return (    
        <Container>
            <Header title="Dashboard">
                <SelectInput options={options} onChange={() => {}}/>
            </Header>
        </Container>
    );
}

export default Dashboard;
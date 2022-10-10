import React from 'react'
import { Container } from './styles'
import Header from '../../components/header'
import SelectInput from '../../components/selectInput';

const List: React.FC = () => {
    const options = [
        {value: 'teste', label: 'teste'},
        {value: 'teste1', label: 'teste1'}
    ]
    
    return (    
        <Container>
            <Header title="List">
                <SelectInput options={options} />
            </Header>
        </Container>
    );
}

export default List;
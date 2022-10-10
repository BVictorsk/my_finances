import React from 'react';

import { Container }  from './styles';

//interface Select Input
interface ISelelectInputProps {
	options: {
        value: string | number;
        label: string | number;
    }[],
}
 
const SelectInput: React.FC<ISelelectInputProps> = ({ options }) => {
	return (
		<Container>
			<select>
                {
                    options.map(option => (
                        <option value={option.value}>{option.label}</option>
                    ))
                }
            </select>
		</Container>
	)
}
 

export default SelectInput;
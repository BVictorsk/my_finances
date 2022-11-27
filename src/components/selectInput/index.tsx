import React from 'react';

import { Container }  from './styles';

//interface Select Input
interface ISelelectInputProps {
	options: {
        value: string | number;
        label: string | number;
    }[],
    onChange(event: React.ChangeEvent<HTMLSelectElement>): void | undefined;
    defaultValue?: string | number;
}
 
const SelectInput: React.FC<ISelelectInputProps> = ({ options, onChange, defaultValue }) =>(
	<Container>
		<select onChange={onChange} defaultValue={defaultValue}>
            {
                options.map(option => (
                    <option 
                        value={option.value}
                        key={option.value}
                    >
                        {option.label}
                    </option>
                ))
            }
        </select>
	</Container>
	)
 

export default SelectInput;
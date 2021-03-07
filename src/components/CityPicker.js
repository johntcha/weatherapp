import React, {useState} from 'react';

const CityPicker = (props) => {
	const [value, setValue] = useState();

	const handleChange = (event) => {
		setValue(event.target.value);
	}
	const handleSubmit = (event) => {
		event.preventDefault();
		props.setCityName(value);
	}

    return (
        <form onSubmit={handleSubmit}>
        	<label>
        		Ville:
        		<input type="text" value={value} onChange={handleChange}/>
        	</label>
        	<input type="submit" value="Envoyer" />
        </form>
    );
};


export default CityPicker;

import { useEffect, useState } from 'react';
import axios from 'axios';

const CharacterGet = () => {

    const [chars, setChars] = useState([]);

    const getCharacters = () => {
        axios.get('http://localhost:1045/getAll'
        ).then((response) => {
            console.log('success', response.data)
            setChars(response.data);
        }).catch(err => console.error('error'))
    }

    useEffect(() => { getCharacters(); }, []); // empty brackets -> only runs on first load


    return (
        <>
            {
                chars.map(char => (
                    <div>
                        <p>{`Name: ${char.name}`}</p>
                        <p>{`Species: ${char.species}`}</p>
                        <p>{`Colour: ${char.colour}`}</p>
                        <p>{`Occupation: ${char.occupation}`}</p>
                        <p>{`Hobby: ${char.hobby}`}</p>
                        <button type="button">DELETE</button>
                    </div>
                ))
           }
        </>
    )
}

export default CharacterGet;
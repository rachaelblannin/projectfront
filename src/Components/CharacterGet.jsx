import { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router';

const CharacterGet = () => {

    const [chars, setChars] = useState([]);
    const navigate = useNavigate();

    const getCharacters = () => {
        axios.get('http://localhost:1045/getAll'
        ).then((response) => {
            console.log('success', response.data)
            setChars(response.data);
        }).catch(err => console.error('error'))
    }

    useEffect(() => { getCharacters(); }, []); // empty brackets -> only runs on first load


    const handleDelete = async (id) => {
        await axios.delete("http://localhost:1045/delete/" + id);
        getCharacters();
    }
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
                        <button type="button" onClick={() => handleDelete(char._id)}>DELETE</button>
                        <button onClick={() => navigate("/replace/" + char._id)}>UPDATE</button>
                    </div>
                ))
           }
        </>
    )
}

export default CharacterGet;
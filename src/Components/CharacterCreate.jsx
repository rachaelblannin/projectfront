import { useEffect, useState } from 'react';
import axios from 'axios';

const CharacterCreate = () => {

    const [name, setName] = useState("");
    const [species, setSpecies] = useState("");
    const [colour, setColour] = useState("");
    const [occupation, setOccupation] = useState("");
    const [hobby, setHobby] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();

        axios.post('http://localhost:1045/createCharacter', {
            name,
            species,
            colour,
            occupation,
            hobby
        }).then((response) => {
            console.log('success', response.data)
            // setData(postData);
        }).catch(err => console.error('error'))
    }



    return (
        <>
            <form onSubmit={submitHandler}>
                <label>Name</label>
                <input name="name"
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)} />
                    <br/>
                    <br/>

                <label>Species</label>
                <input name="species"
                    type="text"
                    value={species}
                    onChange={e => setSpecies(e.target.value)} />
                    <br/>
                    <br/>

                <label>Colour</label>
                <input name="colour"
                    type="text"
                    value={colour}
                    onChange={e => setColour(e.target.value)} />
                    <br/>
                    <br/>

                <label>Occupation</label>
                <input name="Occupation"
                    type="text"
                    value={occupation}
                    onChange={e => setOccupation(e.target.value)} />
                    <br/>
                    <br/>

                <label>Hobby</label>
                <input name="Hobby"
                    type="text"
                    value={hobby}
                    onChange={e => setHobby(e.target.value)} />
                <br />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default CharacterCreate;

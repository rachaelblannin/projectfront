import { useEffect, useState } from 'react';
import axios from 'axios';

const Character = () => {
    const [name, setName] = useState("");
    const [species, setSpecies] = useState("");
    const [colour, setColour] = useState("");
    const [occupation, setOccupation] = useState("");
    const [hobby, setHobby] = useState("");

const changeHandler=(e) => {
    e.preventDefault();
}

body = {
    name: name,
    species: species,
    colour: colour,
    occupation: occupation,
    hobby: hobby
}

axios.post('https://localhost:1045/createCharacter', postData
    .then((response) => {
        console.log('success')
        setData({
            name: "",
            species: "",
            colour: "",
            occupation: "",
            hobby: ""
    }).catch(err)
        console.error('error')
    }
    

return(
    <>
    <form onSubmit={changeHandler}>
        <label>Name</label>
        <input name="name"
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}/>

        <label>Species</label>
        <input name="species"
        type="text"
        value={species}
        onChange={e => setSpecies(e.target.value)}/>

        <label>Colour</label>
        <input name="colour"
        type="text"
        value={colour}
        onChange={e => setColour(e.target.value)}/>

        <label>Occupation</label>
        <input name="Occupation"
        type="text"
        value={occupation}
        onChange={e => setOccupation(e.target.value)}/>

        <label>Hobby</label>
        <input name="Hobby"
        type="text"
        value={hobby}
        onChange={e => setHobby(e.target.value)}/>
        <br/>
        <button onClick={post}>Submit</button>
    </form>
    </>
);
}
export default Character;

import { useEffect, useState } from 'react';
import axios from 'axios';

const Character = () => {
    const [data, setData] = useState([]);
    

const changeHandler=(e) => {
    e.preventDefault();
}

const body = {
    name: name,
    species: species,
    colour: colour,
    occupation: occupation,
    hobby: hobby
}

useEffect(() => {
const getCharacter = async () => {
    try {
        const res = await axios.get('https://localhost:1045/getAll');
        console.log("response:", res);
        setData(res.data);
        } catch(err){
            console.error("error");
        }
    }
})

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
)
    }

export default CharacterGet;
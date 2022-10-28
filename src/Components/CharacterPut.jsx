import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';



const CharacterPut = () => {

    const {id} = useParams();
    const [name, setName] = useState("");
    const [species, setSpecies] = useState("");
    const [colour, setColour] = useState("");
    const [occupation, setOccupation] = useState("");
    const [hobby, setHobby] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put('http://localhost:1045/replace/' + id, {
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


        return(
            <form onSubmit={handleSubmit}>
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
                <button>Update</button>
            </form>
        )
            }
        
        export default CharacterPut;
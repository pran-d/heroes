import { useState, useEffect } from "react"; 
import useFetch from './useFetch';
import {useParams, useHistory} from "react-router-dom";

const HeroEdit = () => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [isUpdating, setIsUpdating] = useState(false);
    const history = useHistory();

    useEffect(()=>{
        async function FetchData(){
            const {data: hero, isPending, error} = await useFetch('http://localhost:8000/heroes/'+id);
            setName(hero.namoke);
        }
    }, [name])

    const handleSubmit = (e) => {
        e.preventDefault();
        const url = 'http://localhost:8000/heroes/'+id;

        setIsUpdating(true);

        fetch(url, {
            method: 'PATCH',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({name, id})
        })
        .then(() => {
            console.log("hero name edited");
            setIsUpdating(false);
            history.push("/");
        })
    }

    return (
        <div className="edit">
        <h2>Change hero name - {id}</h2>
        {hero && <p>Current name: {hero.name}</p>}
        <form onSubmit={handleSubmit}>
            <label>Hero name:</label>
            <input 
            type="text" 
            required 
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            {!isUpdating && <button>Apply changes</button>}
            {isUpdating && <button disabled>Applying...</button>}
        </form>
        </div>
    );
    }
    
    export default HeroEdit;
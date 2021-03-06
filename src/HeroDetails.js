import {useParams, useHistory} from 'react-router-dom';
import { useState } from "react"; 
import useFetch from './useFetch';

const HeroDetails = () => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [isUpdating, setIsUpdating] = useState(false);
    const history = useHistory();
    const {data: hero, isPending, error} = useFetch('http://localhost:8000/heroes/'+id);
    const [receivedData, setReceivedData] = useState(false);

    if(hero&&!receivedData)
    {
        setName(hero.name);
        setReceivedData(true);
    }

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
        <div className="detail-encloser">
            <h2>Hero Details</h2>
            {isPending && <div>Loading...</div>}
            {error && <div> {error} </div>}
            {hero && 
            <div className="current-name">
                <span className="hero-details">Hero Name: </span>{hero.name}
                <br/><span className="hero-details">Hero ID: </span>{id}
            </div>}
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                required 
                value={name}
                placeholder="enter new name..."
                onChange={(e) => setName(e.target.value)}
                />
                {!isUpdating && <button>Apply changes</button>}
                {isUpdating && <button disabled>Applying...</button>}
            </form>
        </div>
     );
}
 
export default HeroDetails;
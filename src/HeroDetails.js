import {useParams} from 'react-router-dom';
import useFetch from './useFetch';
import {Link} from 'react-router-dom'; 

const HeroDetails = () => {

    const { id } = useParams();
    const {data: hero, isPending, error} = useFetch('http://localhost:8000/heroes/'+id);

    return ( 
        <div className="hero-details">
            <h1>Hero Details - {id} </h1>
            {isPending && <div>Loading...</div>}
            {error && <div> {error} </div>}
            {hero && <div>Hero Name: {hero.name}</div>}
            {hero && <Link to={`/edit/${hero.id}`}>edit</Link>}
        </div>
     );
}
 
export default HeroDetails;
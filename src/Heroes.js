import HeroList from "./HeroList";
import useFetch from "./useFetch";

function Heroes() {
    const {data: heroes, isPending, error} = useFetch('http://localhost:8000/heroes');

    return(
        <div>
            {isPending && <div>Loading...</div>}
            {error && <div> {error} </div>}
            {heroes && <HeroList className1="hero-preview" heroes={heroes} title='All Heroes' />}
        </div>
    );
}

export default Heroes;
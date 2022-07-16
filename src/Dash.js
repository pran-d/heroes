import HeroList from "./HeroList";
import useFetch from "./useFetch";

function Dash() {

    const {data: heroes, isPending, error} = useFetch('http://localhost:8000/heroes');

    return(
        <div>
            {isPending && <div>Loading...</div>}
            {error && <div> {error} </div>}
            {heroes && <HeroList heroes={heroes.filter(hero=>hero.id<=4)} title="Dashboard" />}
        </div>
    );
}

export default Dash;
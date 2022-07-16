import {Link} from 'react-router-dom'; 

const HeroList = ({heroes, title}) => {
    return(
        <div className="heroes">
            <h2>{title}</h2>
            {heroes.map(hero=>(
                <div className="hero-preview" key={hero.id}>
                    <div className="heroName">
                        <Link to={`/heroes/${hero.id}`}>
                             {hero.name}
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default HeroList;
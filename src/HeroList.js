import {Link} from 'react-router-dom'; 

const HeroList = ({heroes, title, className1}) => {
    return(
        <div className="heroes">
            <h2>{title}</h2>
            {heroes.map(hero=>(
                <Link to={`/heroes/${hero.id}`}>
                    <div className={className1} key={hero.id}>
                        {hero.name}
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default HeroList;
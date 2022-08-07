import Pokecard from './Pokecard'
import './Pokedex.css'

const Pokedex = ({cards})=>{
    return (
        <div className='Pokedex'>
        {
            cards.map(c => (
                <Pokecard id={c.id} name={c.name} type={c.type} experience={c.base_experience} 
                img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${c.id}.png.`}/>
            ))
        }
        </div>
    )
}

export default Pokedex
import './Pokecard.css'

const Pokecard = (props)=>{
    console.log(props.img)
    return (
        <div className='Pokecard'>
            <h1>{props.name}</h1>
            <h3>{props.type}</h3>
            <p>{props.experience}</p>
            <img src={`${props.img}`} width='100px' height='100px'></img>
        </div>
    )
}

export default Pokecard
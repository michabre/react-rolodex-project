import './card.styles.css'

type Monster = {
    id: string,
    name: string,
    email: string
}

const Card = ({ monster }:{monster:Monster}) => {
    const { id, name, email } = monster
    return (
        <div className='card-container' key={id}>
            <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`Monster ${name}`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default Card
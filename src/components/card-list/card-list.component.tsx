import Card from '../card/card.component'
import './card-list.styles.css'

type Monster = {
  id: string,
  name: string,
  email: string
}

const CardList = ({ monsters }:{ monsters:Monster[]}) => {
  return (
    <div className="card-list">
      {monsters.map(
      (monster:Monster) => {
        return (
          <Card key={monster.id} monster={monster} />
        )
      })}
    </div>
  )
}

export default CardList
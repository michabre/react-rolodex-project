import { Component} from 'react'

type CardListProps = {
    monsters: any
  }

class CardList extends Component<CardListProps> {
    constructor(props:any) {
        super(props)
    }

    buildList() {
        return this.props.monsters.map(
            (monster:any) => <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>)
    }

    render() {
        return (
            <>
              <h2>List of Monsters</h2>
              {this.buildList()}
            </>
        )
    }
}

export default CardList
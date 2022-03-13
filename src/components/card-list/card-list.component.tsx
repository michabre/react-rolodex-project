import { Component} from 'react'
import Card from '../card/card.component'
import './card-list.styles.css'

type Monster = {
  id: string,
  name: string,
  email: string
}

// type CardListProps = {
//     monsters: Monster[]
//   }

  const CardList = ({ monsters:[] }) => {


    const buildList = () => {
      // return monsters.map(
      //   (monster:Monster) => {
      //     return (
      //       <Card key={monster.id} monster={monster} />
      //     )
      //   }
      // )
      return 'build the list'
    }

    return (
      <div className="card-list">
        {buildList()}
      </div>
  )

  }

// class CardListClassBased extends Component<CardListProps> {
//     buildList() {
//       const { monsters } = this.props
//       return monsters.map(
//         (monster:Monster) => {
//           return (
//             <Card key={monster.id} monster={monster} />
//           )
//         }
//       )
//     }

//     render() {
//       return (
//           <div className="card-list">
//             {this.buildList()}
//           </div>
//       )
//     }
// }

export default CardList
import { Component } from 'react';
import './App.css';

type Monster = { name: string, id: string }
type AppProps = {};
type AppState = { monsters:Monster[], searchField:string };


class App extends Component<AppProps, AppState> {
  constructor(props:any) {
    super(props);
    this.state = {
      monsters: [],
      searchField: ''
    }

    console.log('constructor')
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users) => this.setState( 
      () => { return { monsters: users } },
      () => console.log('state updated')
    ))

    console.log('componentDidMount')
  }

  filterMonsters(event:any) {
    const searchField = event.target.value
    this.setState( 
      () => { return { searchField } }
    )
  }

  render() {
    console.log('render')

    const filteredMonsters = this.state.monsters.filter((monster) => {
      let reGex = new RegExp(this.state.searchField, "ig");
      return reGex.test(monster.name)
    })

    return (
      <div className="App">
        <input 
          className='search-box' 
          type='search' 
          placeholder='Search Monsters' 
          onChange={this.filterMonsters.bind(this)} 
        />

        {filteredMonsters.map(
          (monster) => <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>)
        }
      </div>
    );
  }

}

export default App;

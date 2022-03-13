import { Component } from 'react';
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';

import './App.css';

type Monster = { 
  name: string, 
  id: string,
  email: string
}
type AppProps = {
};
type AppState = { 
  monsters: Monster[], 
  searchField:string 
};

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

  onSearchChange(event:any) {
    const searchField = event.target.value
    this.setState( 
      () => { return { searchField } }
    )
  }

  render() {
    const { monsters, searchField } = this.state
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      let reGex = new RegExp(searchField, "ig");
      return reGex.test(monster.name)
    })

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox className='monsters-search' onChangeHandler={onSearchChange.bind(this)} placeholder='Search Monsters'  />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }

}

export default App;

import { Component, useEffect, useState } from 'react';
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

const App = () => {

  const [monsters, setMonsters] = useState<Monster[]>([])
  const [searchField, setSearchField] = useState<string>("")

  const onSearchChange = (event:any) => {
    setSearchField(event.target.value)
  }

  const filteredMonsters = (arr:Monster[]) => {
    return arr.filter((monster:Monster) => {
      let reGex = new RegExp(searchField, "ig");
      return reGex.test(monster.name)
    })
  }

  //useEffect

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox className='monsters-search' onChangeHandler={onSearchChange.bind(this)} placeholder='Search Monsters'  />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

class AppClassBased extends Component<AppProps, AppState> {
  constructor(props:any) {
    super(props);
    this.state = {
      monsters: [],
      searchField: ''
    }
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

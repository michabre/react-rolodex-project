import { Component, useEffect, useState } from 'react';
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';

import './App.css';

type Monster = { 
  name: string, 
  id: string,
  email: string
}

const App = () => {
  console.log('render')

  const [monsters, setMonsters] = useState<Monster[]>([])
  const [searchField, setSearchField] = useState<string>("")

  const onSearchChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    let target = event.target
    setSearchField(target.value)
  }

  const filteredMonsters = monsters.filter((monster) => {
      let reGex = new RegExp(searchField, "ig");
      return reGex.test(monster.name)
  })

  useEffect(
    () => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => setMonsters( users ))
  }, [])

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox className='monsters-search' onChangeHandler={onSearchChange.bind(this)} placeholder='Search Monsters'  />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;

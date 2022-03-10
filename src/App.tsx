import { Component } from 'react';
import './App.css';

type Monster = { name: string, id: string }
type AppProps = {};
type AppState = { monsters:Monster[] };


class App extends Component<AppProps, AppState> {
  constructor(props:any) {
    super(props);
    this.state = {
      monsters: []
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

  render() {
    console.log('render')
    return (
      <div className="App">
        <input 
          className='search-box' 
          type='search' 
          placeholder='Search Monsters' 
          onChange={(event) => {
            console.log(event.target.value)
          }} 
        />

        {this.state.monsters.map(
          (monster) => <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>)
        }
      </div>
    );
  }

}

export default App;

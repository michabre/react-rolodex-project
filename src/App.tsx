import { Component } from 'react';
import './App.css';

type Monster = { name: string }
type AppProps = {};
type AppState = { monsters:Monster[] };


class App extends Component<AppProps, AppState> {
  constructor(props:any) {
    super(props);
    this.state = {
      monsters: [
        {
          name: "Linda"
        }, 
        {
          name: "Frank"
        }, 
        {
          name: "jack"
        }
      ]
      
    }

  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map(
          (monster, index) => <h1 key={index}>{monster.name}</h1>)
        }
      </div>
    );
  }

}

export default App;

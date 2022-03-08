import { Component } from 'react';
import './App.css';

type MyProps = {};
type MyState = { name: string };

class App extends Component<MyProps, MyState> {
  constructor(props:any) {
    super(props);
    this.state = {
      name: 'Michael'
    }

  }

  render() {
    return (
      <div className="App">
        <p>The App</p>
        <p>Hello {this.state.name}</p>
        <button>Change Name</button>
      </div>
    );
  }

}

export default App;

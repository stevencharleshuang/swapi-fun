import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: '',
    }
  }

  componentDidMount() {
    fetch('https://swapi.co/api/people')
      .then(results => results.json())
      .then(data => {
        let characters = data.results.map((character) => {
          return(
            <div key={character.name}>
              <li className="character">{character.name}</li>
            </div>
          )
        })
        // console.log('sup, data?', data);
        this.setState({characters: characters})
      })
  }

  render() {
    console.log('characters state: ', this.state.characters)
    return (
      <div className="App">
        <h1>hello dave</h1>
        <ul className="characters">
          {this.state.characters}
        </ul>
      </div>
    );
  }
}

export default App;

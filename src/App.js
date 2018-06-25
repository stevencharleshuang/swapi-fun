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
        console.log('sup, data?', data);
        this.setState({characters: data})
      })
  }

  render() {
    console.log('characters state: ', this.state.characters)
    return (
      <div className="App">
        <h1>hello dave</h1>

      </div>
    );
  }
}

export default App;

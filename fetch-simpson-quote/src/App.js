import React from 'react';
import logo from './logo.svg';
import './App.css';
import DisplaySimpson from './components/DisplaySimpson';
import axios from 'axios'

class App extends React.Component {
  constructor(props){
    super(props); 
    this.state = {
      character : {}
    }
    this.getCharacter = this.getCharacter.bind(this);
  }

  getCharacter() {
    // Send the request
    axios.get('https://quests.wilders.dev/simpsons-quotes/quotes')
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        this.setState({
          character: data[0]
        });
    });
  }
  render(){
  return (
    <div className="App">
      <DisplaySimpson character={this.state.character} />
      <button type="button" onClick={this.getCharacter}>Get character</button>
    </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './componets/header';
import Beers from './componets/beers';
import './styles/style.css';
import './App.css'

class App extends Component {
  constructor() {
    super();

    this.state = {
      beers: []
    }
  }

  componentDidMount() {
    fetch(' https://api.punkapi.com/v2/beers').then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data);
      this.setState({
        beers: data
      })
    })
  }

  render() {
    return (
      <div className= 'main-container'>
        <Header />
        <Beers beers={this.state.beers} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

export default App;

import React, {Component} from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css'
import {SearchForm} from './components/SearchForm'



export class App extends Component {
  
  songReceived = (song) => {
    alert(song)
  }

  render ( ){
    return (
      <div className="App">
          <SearchForm songReceived={this.songReceived}/>
      </div>
    );
  }
}


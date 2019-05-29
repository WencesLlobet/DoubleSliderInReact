import React, {Component} from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css'
import {SearchForm} from './components/SearchForm'



export class App extends Component {
  
  constructor(){
    super()
    this.state = { url: 'https://www.gstatic.com/webp/gallery3/1.sm.png'}
  }
  songReceived = (song) => {
    fetch('http://api.giphy.com/v1/gifs/search?api_key=***REMOVED***&q='+song+'&limit=1')
    .then(response => response.json())
    .then( (json)=>{
      this.setState({url: json.data[0].images.fixed_width_small.url})
    })
  }

  render ( ){
    return (
      <div className="App">
          <SearchForm songReceived={this.songReceived}/>
          <img src={this.state.url}></img>
      </div>
   );
  }
}


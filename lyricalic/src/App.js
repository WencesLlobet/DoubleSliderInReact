import React, {Component} from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css'
import {SearchForm} from './components/SearchForm'



export class App extends Component {
  
  constructor(){
    super()
    this.state = { song: "cat dog", url: 'https://www.gstatic.com/webp/gallery3/1.sm.png'}
  }
  songReceived = (song) => {

    song.split(" ").map( (word) => {
      console.log("searching: "+word)
    fetch('http://api.giphy.com/v1/gifs/search?api_key='+process.env.REACT_APP_GIPHY_TOKEN+'&q='+word+'&limit=1')
    .then(response => response.json())
    .then( (json)=>{
      this.setState({['songUrl_'+word]: json.data[0].images.fixed_width_small.url})
    })

    })
      this.setState({song: song})
  }

  render ( ){
    return (
      <div className="App">
          <SearchForm songReceived={this.songReceived}/>
          {this.state.song.split(" ").map( (word,i) => {
            console.log("pringing: "+word)
           return <li key={i}>
            <img  src={this.state['songUrl_'+word]}></img>
            {word}
           </li>
          })}
      </div>
   );
  }
}


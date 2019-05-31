import React, {Component} from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import {SearchForm} from './components/SearchForm'

export class App extends Component {
  
  constructor(){
    super()
    this.state = { song: "cat dog"}
  }

  componentDidMount() {
      this.songToGifsMosaicState(this.state.song)
  }
  songReceived = (song) => {
    this.setState({song: song})
    this.songToGifsMosaicState(song)
  }

  songToGifsMosaicState = (song) => {
    song.split(" ").map( (word) => {
      this.getGifForWord(word, (gifUrl)=>{
          this.setState({['songUrl_'+word]: gifUrl})})
    });
  }

  getGifForWord = (word, callback)=> {
    fetch('http://api.giphy.com/v1/gifs/search?api_key='+process.env.REACT_APP_GIPHY_TOKEN+'&q='+word+'&limit=1')
      .then(response => response.json())
      .then( (json)=>{
        callback(json.data[0].images.fixed_width_small.url);
      })
  }

  
  render ( ){ 
    return (
      <div className="App">
          <SearchForm songReceived={this.songReceived}/>
            <div class="panel">
            {this.state.song.split(" ").map( (word,i) => {
              return <div class="container">
                        <img  key={i} src= {this.state['songUrl_'+word]} 
                              alt="word"/>
                        <div class="centered">{word.toUpperCase()}</div>
                      </div>
            })}
          </div>
      </div>
   );
  }
}


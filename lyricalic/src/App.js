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
      this.songToGifsMosaicState()
  }
  songReceived = (song) => {
    this.setState({song: song})
    this.songToGifsMosaicState()
  }

  songToGifsMosaicState = () => {
    this.state.song.split(" ").map( (word) => {
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
            {this.state.song.split(" ").map( (word,i) => {
              return <li key={i}>
                        <img  src= {this.state['songUrl_'+word]} 
                              alt="word"/>
                        {word}
                     </li>
          })}
      </div>
   );
  }
}


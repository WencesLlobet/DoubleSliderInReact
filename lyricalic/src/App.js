import React, {Component} from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css'
import {SearchForm} from './components/SearchForm'



export class App extends Component {
  
  constructor(){
    super()
    fetch('http://api.giphy.com/v1/gifs/search?api_key=***REMOVED***&q=beethoven&limit=1')
    .then(response => response.json())
    .then( (json)=>{
      //this.setState({ url: 'https://media2.giphy.com/media/10qoDO5ERnWoBG/100.gif'})
      this.setState({url: json.data[0].images.fixed_height_small.url})
    })
    this.state = { url: 'https://www.gstatic.com/webp/gallery3/1.sm.png'}
  }
  songReceived = (song) => {
    alert(song)
  }

  render ( ){
    return (
      <div className="App">
          <SearchForm songReceived={this.songReceived}/>
          <img src={this.state.url}></img>
      </div>


//
//http://api.giphy.com/v1/gifs/search?api_key=***REMOVED***&q=bach&limit=1
    );
  }
}


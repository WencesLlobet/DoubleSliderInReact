import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css'
import {SearchForm} from './components/SearchForm'
function App() {
  return (
    <div className="App">
        <SearchForm songReceived={(song)=> alert(song)}/>
    </div>
  );
}

export default App;

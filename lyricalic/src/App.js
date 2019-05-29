import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css'

function App() {
  return (
    <div className="App">
    <div className="searchForm-wrapper">
      <div class="field has-addons">
        <div class="control">
          <input class="input" type="text" placeholder="Group"/>
        </div>
        <div class="control">
          <input class="input" type="text" placeholder="Song"/>
        </div>
        <div class="control">
          <a class="button is-info">
            Search
          </a>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;

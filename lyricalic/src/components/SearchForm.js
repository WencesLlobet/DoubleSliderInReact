import React from 'react';

export const SearchForm = (props)=> {return (<div className="searchForm-wrapper">
      <div className="field has-addons">
        <div className="control">
          <input className="input" type="text" placeholder="Group"/>
        </div>
        <div className="control">
          <input class="input" type="text" placeholder="Song"/>
        </div>
        <div className="control">
          <button className="button is-info" onClick={( )=>{
              props.songReceived("people, all the people moving")}
          }>
            Search
          </button>
        </div>
      </div>
    </div>)}
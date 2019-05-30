import React,{Component} from 'react';

export class SearchForm extends Component{

 songTyped = (e) => {
   this.setState({ song: e.target.value})
 }
 render() {return (<div className="searchForm-wrapper">
      <div className="field has-addons">
        <div className="control">
          <input className="input" type="text" placeholder="Group"/>
        </div>
        <div className="control">
          <input onChange={this.songTyped} className="input" type="text" placeholder="Song"/>
        </div>
        <div className="control">
          <button className="button is-info" onClick={( )=>{
              this.props.songReceived(this.state.song)}
          }>
            Search
          </button>
        </div>
      </div>
    </div>)}
}
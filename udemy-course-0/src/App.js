import React from 'react';
import { Component } from  'react';
import { Button} from 'react-bootstrap';


class HelloWorld extends Component {
  render(){
    return (<p>
              Hello world { this.props.isGreat 
              ? "!!!!"
              : ""
            }
          </p>);
  }
}

class App extends Component {
  constructor(){
    super();
    this.state = { onoff: false}
  }

  switchContent = () => {
    this.setState({onoff: ! this.state.onoff})
  }

  render () {
    const {onoff} = this.state;
    return (
        <div className="App">
          <Button onClick={this.switchContent}>SendOnOffToChild</Button>
          {JSON.stringify(onoff)}
          <HelloWorld isGreat={onoff}/>
        </div>
      );
    }
}


export default App;

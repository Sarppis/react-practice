import React, {Component} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
    state = {
        output: [
            {id: '1', username: 'Katri'},
            {id: '2', username: 'Riikka'},
            {id: '3', username: 'Victor'}
          ]
      };

  changeNameHandler = event => {
    this.setState(
      {
        output: [
          {id: '1', username: 'Katri'},
          {id: '2', username: 'Riikka'},
          {id: '3', username: event.target.value}
        ]
      }
    )
  }

      render () {
      const inputStyle = {
        background: '#182f42'

          }

      let outputName = null;
          outputName = (
          <div>
            {this.state.output.map((output,index) => {
              return <UserOutput
              key = {output.id}
              username = {output.username}
              changed={(event) => this.changeNameHandler(event, output.id)}
              />;
            })}
          </div>
    )

  return (
    <div className='App' style= {inputStyle}>
    {outputName}
    <UserInput changed={this.changeNameHandler} name={this.state.output[0].name}/>
    </div>
  );
  }
}

export default App;

import React, { Component } from 'react'; 
import Main from '../Main';
import './App.css';
import 'whatwg-fetch';





class App extends Component {



  render() {
    return (
      <div className="App">
        <header className="App-header">
        
          <h1 className="App-title">Lista de Series de  TV </h1>
         
          
          <Main />
        </header>
        
      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.css';
import Main from '../Main';
import { render } from '@testing-library/react';
import 'whatwg-fetch';

class App extends React.Component {
 render() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TV Series App</h1>
      </header>
      <Main />
    </div>
  )
 };
}

export default App;

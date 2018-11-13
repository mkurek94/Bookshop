import React, { Component } from 'react';
import Dashboard from './container/Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <Dashboard />
      // <Fragment>
      //   Zacznij tutaj. Przeczytaj <strong>README.md</strong> i zapoznaj się z treścią zadania
      //   rekrutacyjnego.
      //   <br/>
      //   <a href={`${process.env.REACT_APP_API_URL}/docs`} target="_blank" rel="noopener noreferrer">
      //     Dokumentacja API
      //   </a>
      // </Fragment>
    );
  }
}

export default App;

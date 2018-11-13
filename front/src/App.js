import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from './container/Dashboard/Dashboard';
import Layout from './container/Layout/Layout';
import Basket from './container/Basket/Basket';

class App extends Component {
  render() {
    return (
    <div>
      <BrowserRouter>
        <Layout>
          <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/basket" component={Basket} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>);
      // <Fragment>
      //   Zacznij tutaj. Przeczytaj <strong>README.md</strong> i zapoznaj się z treścią zadania
      //   rekrutacyjnego.
      //   <br/>
      //   <a href={`${process.env.REACT_APP_API_URL}/docs`} target="_blank" rel="noopener noreferrer">
      //     Dokumentacja API
      //   </a>
      // </Fragment>
  }
}

export default App;

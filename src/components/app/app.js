import React from 'react';
import { Route, Switch } from "react-router-dom";
import { HomePage, CartPage } from '../pages';
import ShopHeader from '../shop-header';
import './app.css';

const App = ({numItems, total}) => {
  return (
    <main role="main" className="container">
      <ShopHeader numItems={numItems} total={total}/>
      <Switch>
        <Route
          path="/"
          component={HomePage}
          exact />

          <Route
            path="/cart"
            component={CartPage}/>
      </Switch>
    </main>
  )
}

export default App;

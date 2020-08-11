import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "Pages/Cart/Cart";
import ProductList from "Pages/ProductList/ProductList";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

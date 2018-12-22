import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";
import ProductDetails from "./components/ProductDetails/ProductDetails";

const App = () => {
  return (
    <Router>
      <div>
        <Header />

        <Route exact path="/" component={ProductList} />
        <Route path="/proizvod/:id" component={ProductDetails} />
      </div>
    </Router>
  );
};

export default App;

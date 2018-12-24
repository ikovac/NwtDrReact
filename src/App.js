import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import store from "./store";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="layout-container">
          <Header />

          <main>
            <div className="content">
              <Route exact path="/" component={ProductList} />
              <Route path="/proizvod/:id" component={ProductDetails} />
            </div>
            <Sidebar />
          </main>
        </div>
      </Router>
    </Provider>
  );
};

export default App;

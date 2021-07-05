import React from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import AddTransaction from "./components/AddTransaction";
import IncomeList from "./components/IncomeList";
import ExpenseList from "./components/ExpenseList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./context/Login";
import { GlobalContextProvider } from "./context/GlobalState";
import "./App.css";

const App = () => {
  return (
    <GlobalContextProvider>
      <Router>
        <Switch>
          <Route exact path="./login" context={Login} />
          <Route exact path="./app" />
          <div className="container">
            <div className="app-wrapper">
              <i className="fas fa-university"></i>
              <div className="visa1">
                <p>MasterCard</p>
              </div>
              <div className="visa2"></div>
              <div id="results" className="submit-results"></div>
              <Header />
              <Balance />
              <AddTransaction />
              <IncomeList />
              <ExpenseList />
            </div>
          </div>
          <Route />
        </Switch>
      </Router>
    </GlobalContextProvider>
  );
};

export default App;

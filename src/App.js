import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import ExpenseTracker from "./components/pages/expenseTracker";
import About from "./components/pages/about";

import "./app.scss";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={ExpenseTracker} />
          <Route exact path="/sobre" component={About} />
        </Switch>
        <Footer />
      </>
    </Router>
  );
}

export default App;

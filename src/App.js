import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import "bulma/css/bulma.min.css";
import { HashRouter, Switch, Route } from "react-router-dom";
import { Footer } from "./Components/Footer.js";
import { CustomersDetails } from "./Components/CustomersDetails";
import { TransactionHistory } from "./Components/TransactionHistory"

function App() {
  // Burger event handler
  const handleBurger = (e) => {
    var navbar = document.querySelector("#" + e.target.dataset.target);
    navbar.classList.toggle("is-active");
    e.target.classList.toggle("is-active");
  };

  return (
    <>
      <HashRouter>
        <Header handleBurger={handleBurger} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/custom-details">
            <CustomersDetails />
          </Route>
          <Route exact path="/transaction-statements">
            <TransactionHistory />
          </Route>
        </Switch>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;

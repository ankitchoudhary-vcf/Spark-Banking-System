import "./App.css";
import "bulma/css/bulma.min.css";
import logo from "./favicon.ico";
import { useState, useEffect } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { BeatLoader } from "react-spinners";

import axios from "axios";

import Header from "./Components/Header";
import Home from "./Components/Home";
import { Footer } from "./Components/Footer.js";
import { CustomersDetails } from "./Components/CustomersDetails";
import { TransactionHistory } from "./Components/TransactionHistory";
import { TransferAmount } from "./Components/TransferAmount";
import { CustomerDetail } from "./Components/CustomerDetail";
import { About } from "./Components/About";

function App() {
  //customersDetails
  const [customersDetails, setCustomersDetails] = useState([]);

  // loader
  const [Customerloading, setCustomerLoading] = useState(false);
  const [transactionloading, setTransactionLoading] = useState(false);

  //fetching the customersDetails
  useEffect(() => {
    async function fetchCustomersDetails() {
      try {
        const data = await axios.get(
          process.env.React_App_API_KEY+"/customers"
        );
        setCustomersDetails(data.data);
        setCustomerLoading(true);
      } catch (err) {
        console.log(err);
      }
    }
    fetchCustomersDetails();
  }, [customersDetails]);

  //transactionDetails
  const [transactionDetails, setTransactionDetails] = useState([]);

  //fetching the transaction details
  useEffect(() => {
    async function fetchTransactionDetails() {
      try {
        const transactionData = await axios.get(
          process.env.React_App_API_KEY +"/transactions"
        );
        setTransactionDetails(transactionData.data);
        setTransactionLoading(true);
      } catch (err) {
        console.log(err);
      }
    }
    fetchTransactionDetails();
  }, [transactionDetails]);

  // transfer parameters
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");

  // Transfer event handler
  const handleTransfer = async (e) => {
    e.preventDefault();

    if (to && from && amount > 0 && to !== from) {
      var process = document.querySelector("#transfer");
      process.classList.add("is-loading");

      const data = {
        from: parseInt(from),
        to: parseInt(to),
        amount: parseInt(amount),
      };

      try {
        const transfer = await axios.put(
          process.env.React_App_API_KEY+`/customers/${data.from}&${data.to}`,
          {
            amount: data.amount,
          }
        );
        if (transfer.status === 200 && !transfer.data.message) {
          const response = await axios.post(
            process.env.React_App_API_KEY+"/transactions",
            data
          );
          if (response.status === 200) {
            process.classList.remove("is-loading");
            alert(" Transfer Done Successfully !!");
          } else {
            process.classList.remove("is-loading");
            alert(" Transfer Failed, Try again!!");
          }
        } else {
          process.classList.remove("is-loading");
          alert(transfer.data.message + " !!");
        }
      } catch (err) {
        process.classList.remove("is-loading");
        alert(" Internal Error occurred, Try again after few minutes!!");
      }
    } else {
      alert("Invalid Amount. Please try!!");
    }

    setFrom("");
    setTo("");
    setAmount("");
  };

  // customer variables
  const [currentCustomer, setCurrentCustomer] = useState("");

  // transfer state
  const [transfer, setTransfer] = useState("Transfer From");

  useEffect(() => {
    if (transfer !== "Transfer From") {
      setFrom(transfer);
    }
  }, [transfer]);

  return (
    <>
      <HashRouter>
        {!transactionloading && !Customerloading ? (
          <>
            <div
              style={{
                position: "relative",
                justifyContent: "center",
                alignItems: "center",
                top: "40vh",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img src={logo} alt="logo" />
              <div style={{ display: "flex" }}>
                <BeatLoader loading color="orange" size={48} />
              </div>
            </div>
          </>
        ) : (
          <>
            <Header />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/customs-details">
                <CustomersDetails
                  customersDetails={customersDetails}
                  setCurrentCustomer={setCurrentCustomer}
                  currentCustomer={currentCustomer}
                />
              </Route>
              <Route exact path="/transaction-statements">
                <TransactionHistory
                  transactionDetails={transactionDetails}
                />
              </Route>
              <Route exact path="/transfer-amount">
                <TransferAmount
                  customersDetails={customersDetails}
                  to={to}
                  from={from}
                  setTo={setTo}
                  setAmount={setAmount}
                  setFrom={setFrom}
                  amount={amount}
                  handleTransfer={handleTransfer}
                />
              </Route>
              <Route exact path="/customer-details">
                <CustomerDetail
                  customersDetails={customersDetails}
                  currentCustomer={currentCustomer}
                  transactionDetails={transactionDetails}
                  setTransfer={setTransfer}
                />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
            </Switch>
            <Footer />
          </>
        )}
      </HashRouter>
    </>
  );
}

export default App;

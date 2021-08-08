import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { Footer } from "./Components/Footer.js";
import { CustomersDetails } from "./Components/CustomersDetails";
import { TransactionHistory } from "./Components/TransactionHistory";
import { TransferAmount } from "./Components/TransferAmount";
import { CustomerDetail } from "./Components/CustomerDetail";
import { About } from "./Components/About";
import "bulma/css/bulma.min.css";
import { HashRouter, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  //customersDetails
  const [customersDetails, setCustomersDetails] = useState([]);

  //fetching the customersDetails
  useEffect(() => {
    async function fetchCustomersDetails() {
      try {
        const data = await axios.get("https://banking-server.herokuapp.com/customers");
        setCustomersDetails(data.data);
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
          "https://banking-server.herokuapp.com/transactions"
        );
        setTransactionDetails(transactionData.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchTransactionDetails();
  }, [transactionDetails]);

  // transfer parameters
  const [from, setFrom] = useState("Transfer From");
  const [to, setTo] = useState("Transfer To");
  const [amount, setAmount] = useState("");
  const [count, setCount] = useState(0);

  // transfer error parameters
  const [errors, setError] = useState({});

  useEffect(() => {
    const data = {
      from: parseInt(from),
      to: parseInt(to),
      amount: parseInt(amount),
    };

    if (count === 0) {
      setError({
        from: false,
        to: false,
        amount: false,
      });
    } else {
      if (!data.from) {
        if (!data.to) {
          if (!data.amount || !(data.amount > 0)) {
            const error = {
              from: true,
              to: true,
              amount: true,
            };
            setError(error);
          } else {
            const error = {
              from: true,
              to: true,
              amount: false,
            };
            setError(error);
          }
        } else {
          if (!data.amount || !(data.amount > 0)) {
            const error = {
              from: true,
              to: false,
              amount: true,
            };
            setError(error);
          } else {
            const error = {
              from: true,
              to: false,
              amount: false,
            };
            setError(error);
          }
        }
      } else {
        if (!data.to) {
          if (!data.amount || !(data.amount > 0)) {
            const error = {
              from: false,
              to: true,
              amount: true,
            };
            setError(error);
          } else {
            const error = {
              from: false,
              to: true,
              amount: false,
            };
            setError(error);
          }
        } else {
          if (data.from === data.to) {
            if (!data.amount || !(data.amount > 0)) {
              const error = {
                from: true,
                to: true,
                amount: true,
              };
              setError(error);
            } else {
              const error = {
                from: true,
                to: true,
                amount: false,
              };
              setError(error);
            }
          } else {
            if (!data.amount || !(data.amount > 0)) {
              const error = {
                from: false,
                to: false,
                amount: true,
              };
              setError(error);
            } else {
              const error = {
                from: false,
                to: false,
                amount: false,
              };
              setError(error);
            }
          }
        }
      }
    }
  }, [from, to, amount, count]);

  // Transfer event handler
  const handleTransfer = async (e) => {
    e.preventDefault();

    setCount(count + 2);

    if (!errors.from && !errors.to && !errors.amount && to && from && amount) {
      var process = document.querySelector("#transfer");
      process.classList.add("is-loading");
    }

    const data = {
      from: parseInt(from),
      to: parseInt(to),
      amount: parseInt(amount),
    };

    try {
      const transfer = await axios.put(
        `https://banking-server.herokuapp.com/customers/${data.from}&${data.to}`,
        {
          amount: data.amount,
        }
      );
      if (transfer.status === 200 && !transfer.data.message) {
        const response = await axios.post(
          "https://banking-server.herokuapp.com/transactions",
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

    setFrom("Transfer From");
    setTo("Transfer To");
    setAmount("");
    setCount(0);
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
        <Header/>
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
            <TransactionHistory transactionDetails={transactionDetails} />
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
              error={errors}
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
          <About/>
          </Route>
        </Switch>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;

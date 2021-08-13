import React from "react";
import { useState, useEffect } from "react";

export const TransferAmount = (props) => {

  // options list
  const [customersDetailsTo, setCustomersDetailsto] = useState([]);
  const [customersDetailsFrom, setCustomersDetailsfrom] = useState([]);
  
  // Transfer to options list handled
  useEffect(() => {
    function filteredCustomer(data) {
      return data.Account_No !== parseInt(props.from)
    }
    async function Customers() {
      var filtered = await props.customersDetails.filter(filteredCustomer);
      setCustomersDetailsto(filtered);
    }
    Customers();
  }, [props.customersDetails, props.from]);

  // Transfer From options list handled
  useEffect(() => {
    function filteredCustomer(data) {
      return data.Account_No !== parseInt(props.to)
    }
    async function Customers() {
      var filtered = await props.customersDetails.filter(filteredCustomer);
      setCustomersDetailsfrom(filtered);
    }
    Customers();
  }, [props.customersDetails, props.to]);


  return (
    <>
      <div className="mt-6 notification mx-2 is-success is-light title has-text-centered">
        Transfer Amount
        <hr className="has-background-success" />
      </div>

      <div className="columns is-centered mx-2">
        <div className="column is-6 notification is-info is-light mt-6 ">
          <form onSubmit={props.handleTransfer}>
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label ">Transfer From : </label>
              </div>
              <div className="field-body">
                <div className="field is-narrow">
                  <div className="control">
                    <div className="select is-fullwidth">
                      <select
                        value={props.from}
                        onChange={(e) => props.setFrom(e.target.value)}
                        required
                      >
                        <option value="" disabled>
                          Transfer From
                        </option>
                        {customersDetailsFrom.map((customer) => (
                          <option
                            key={customer._id}
                            value={customer.Account_No}
                          >
                            {customer.Account_Holder} ({customer.Account_No})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label ">Transfer To : </label>
              </div>
              <div className="field-body">
                <div className="field is-narrow">
                  <div className="control">
                    <div className="select is-fullwidth">
                      <select
                        value={props.to}
                        onChange={(e) => props.setTo(e.target.value)}
                        required
                      >
                        <option value="" disabled>
                          Transfer To
                        </option>
                        {customersDetailsTo.map((customer) => (
                          <option
                            key={customer._id}
                            value={customer.Account_No}
                          >
                            {customer.Account_Holder} ({customer.Account_No})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Amount</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <input
                      className="input"
                      type="number"
                      placeholder="Enter Amount"
                      value={props.amount}
                      onChange={(e) => props.setAmount(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label"></div>
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <button className="button is-primary" id="transfer">
                      Transfer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

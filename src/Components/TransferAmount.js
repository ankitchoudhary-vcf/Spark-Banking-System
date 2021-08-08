import React from "react";

export const TransferAmount = (props) => {
  // console.log(props.error)
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
                  {props.error.from ? (
                    <>
                      <div className="control">
                        <div className="select is-fullwidth is-danger">
                          <select
                            value={props.from}
                            onChange={(e) => props.setFrom(e.target.value)}
                          >
                            <option value="Transfer From">Transfer From</option>
                            {props.customersDetails.map((customer) => (
                              <option
                                key={customer._id}
                                value={customer.Account_No}
                              >
                                {customer.Account_Holder} ({customer.Account_No}
                                )
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <p className="help is-danger">Invalid Input</p>
                    </>
                  ) : (
                    <div className="control">
                      <div className="select is-fullwidth">
                        <select
                          value={props.from}
                          onChange={(e) => props.setFrom(e.target.value)}
                        >
                          <option value="Transfer From">Transfer From</option>
                          {props.customersDetails.map((customer) => (
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
                  )}
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label ">Transfer To : </label>
              </div>
              <div className="field-body">
                <div className="field is-narrow">
                  {props.error.to ? (
                    <>
                      <div className="control">
                        <div className="select is-fullwidth is-danger">
                          <select
                            value={props.to}
                            onChange={(e) => props.setTo(e.target.value)}
                          >
                            <option value="Transfer To">Transfer To</option>
                            {props.customersDetails.map((customer) => (
                              <option
                                key={customer._id}
                                value={customer.Account_No}
                              >
                                {customer.Account_Holder} ({customer.Account_No}
                                )
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <p className="help is-danger">Invalid Input</p>
                    </>
                  ) : (
                    <div className="control">
                      <div className="select is-fullwidth">
                        <select
                          value={props.to}
                          onChange={(e) => props.setTo(e.target.value)}
                        >
                          <option value="Transfer To">Transfer To</option>
                          {props.customersDetails.map((customer) => (
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
                  )}
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Amount</label>
              </div>
              <div className="field-body">
                <div className="field">
                  {props.error.amount ? (
                    <>
                      <div className="control">
                        <input
                          className="input is-danger"
                          type="number"
                          placeholder="Enter Amount"
                          value={props.amount}
                          onChange={(e) => props.setAmount(e.target.value)}
                        />
                      </div>
                      <p className="help is-danger">Invalid Input</p>
                    </>
                  ) : (
                    <>
                      <div className="control">
                        <input
                          className="input"
                          type="number"
                          placeholder="Enter Amount"
                          value={props.amount}
                          onChange={(e) => props.setAmount(e.target.value)}
                        />
                      </div>
                    </>
                  )}
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

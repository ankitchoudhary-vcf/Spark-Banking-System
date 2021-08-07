import React from "react";

export const Details = (props) => {
  return (
    <>
      <div className="column is-12">
        <div className="columns has-text-centered is-mobile p-0">
          <div className="column is-3">
            <h3 className="title is-size-5-touch is-size-3-desktop">{props.customer.Account_No}</h3>
          </div>
          <div className="column is-3">
            <h3 className="title is-size-5-touch is-size-3-desktop">
            {props.customer.Account_Holder}
            </h3>
          </div>
          <div className="column is-3">
            <h3 className="title is-size-5-touch is-size-3-desktop">
            {props.customer.Email_Id}
            </h3>
          </div>
          <div className="column is-3">
            <h3 className="title is-size-5-touch is-size-3-desktop">₹{props.customer.Balance}</h3>
          </div>
        </div>
        <hr className="has-background-dark" />
      </div>
    </>
  );
};

import React from "react";
import { Details } from "./Details";

export const CustomersDetails = (props) => {
  return (
    <>
      <div className="mt-6 notification mx-2 is-success is-light title has-text-centered">
        Customers Details
        <hr className="has-background-success" />
      </div>
      <div className="columns notification is-light mx-2 is-mobile is-multiline">
        <div className="column is-12">
          <div className="columns notification has-text-centered is-mobile is-dark p-0">
            <div className="column is-3">
              <h3 className="title is-size-5-touch is-size-3-desktop">
                Account No.
              </h3>
            </div>
            <div className="column is-3">
              <h3 className="title is-size-5-touch is-size-3-desktop">
                Account Holder Name
              </h3>
            </div>
            <div className="column is-3">
              <h3 className="title is-size-5-touch is-size-3-desktop">
                Email-ID
              </h3>
            </div>
            <div className="column is-3">
              <h3 className="title is-size-5-touch is-size-3-desktop">
                Balance
              </h3>
            </div>
          </div>
          <hr className="has-background-dark" />
          <hr className="has-background-dark" />
        </div>

        {props.customersDetails.length === 0 ? (
          <div className="has-background-danger column is-12 has-text-centered title is-size-6-touch is-size-4-desktop">
            {" "}
            No Data to Display{" "}
          </div>
        ) : (
          props.customersDetails.map((customer) => {
            return <Details key={customer.id} customer={customer} />;
          })
        )}
      </div>
    </>
  );
};

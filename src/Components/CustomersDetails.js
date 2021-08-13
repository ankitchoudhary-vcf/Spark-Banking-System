import React, { useState, useEffect } from "react";
import { BeatLoader } from "react-spinners";
import { Details } from "./Details";
export const CustomersDetails = (props) => {
  
  const [customers, setCustomer] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setCustomer(props.customersDetails);
    setLoading(true);
  }, [props.customersDetails]);

  return (
    <>
      <div className="mt-6 notification mx-2 is-success is-light title has-text-centered">
        Customers Details
        <hr className="has-background-success" />
      </div>
      <div
        className="columns notification is-light mx-2 is-mobile is-multiline"
        style={{ justifyContent: "center" }}
      >
        <div className="column is-12">
          <div className="columns notification has-text-centered is-mobile is-dark p-0">
            <div className="column is-3 px-0">
              <h3 className="title is-size-6-touch is-size-3-desktop">
                Account No.
              </h3>
            </div>
            <div className="column is-3 px-0">
              <h3 className="title is-size-6-touch is-size-3-desktop">
                Account Holder Name
              </h3>
            </div>
            <div className="column is-3 px-0">
              <h3 className="title is-size-6-touch is-size-3-desktop">
                Email-ID
              </h3>
            </div>
            <div className="column is-3 px-0">
              <h3 className="title is-size-6-touch is-size-3-desktop">
                Balance
              </h3>
            </div>
          </div>
          <hr className="has-background-dark" />
          <hr className="has-background-dark" />
        </div>

        {!loading ? (
          <>
            <BeatLoader size={72} color="orange" loading />
          </>
        ) : customers.length === 0 ? (
          <div className="has-background-danger column is-12 has-text-centered title is-size-6-touch is-size-4-desktop">
            {" "}
            No Data to Display{" "}
          </div>
        ) : (
          customers.map((customer) => {
            return (
              <Details
                key={customer._id}
                customer={customer}
                setCurrentCustomer={props.setCurrentCustomer}
                currentCustomer={props.currentCustomer}
              />
            );
          })
        )}
      </div>
    </>
  );
};

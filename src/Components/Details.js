import React from "react";
import { Link } from "react-router-dom";

export const Details = (props) => {
  return (
    <>
      <Link
        to="/customer-details"
        className="column is-12 table my-0 is-hover"
        data-acc={props.customer.Account_No}
        onClick={(e) => {
          props.setCurrentCustomer(e.target.dataset.acc);
        }}
      >
        <div
          className="columns has-text-centered is-mobile p-0"
          data-acc={props.customer.Account_No}
        >
          <div
            className="column is-3 px-0"
            data-acc={props.customer.Account_No}
          >
            <h3
              className="title is-size-7-touch is-size-3-desktop mt-4"
              data-acc={props.customer.Account_No}
            >
              {props.customer.Account_No}
            </h3>
          </div>
          <div
            className="column is-3 px-0"
            data-acc={props.customer.Account_No}

            style={{display: 'flex'}}
          >
            <figure class="image is-48x48 mx-1 is-hidden-desktop">
              <img
                class="is-rounded"
                alt="Profile"
                src={props.customer.Profile}
              />
            </figure>
            <figure class="image is-96x96 mx-1 is-hidden-touch">
              <img
                class="is-rounded"
                alt="Profile"
                src={props.customer.Profile}
              />
            </figure>
            <h3
              className="title is-size-7-touch mt-4 ml-2 is-size-3-desktop"
              data-acc={props.customer.Account_No}
            >
              {props.customer.Account_Holder}
            </h3>
          </div>
          <div
            className="column is-3 px-0"
            data-acc={props.customer.Account_No}
          >
            <h3
              className="title mt-4 is-size-7-touch is-size-3-desktop"
              data-acc={props.customer.Account_No}
            >
              {props.customer.Email_Id}
            </h3>
          </div>
          <div
            className="column is-3 px-0"
            data-acc={props.customer.Account_No}
          >
            <h3
              className="title mt-4 is-size-7-touch is-size-3-desktop"
              data-acc={props.customer.Account_No}
            >
              ₹{props.customer.Balance}
            </h3>
          </div>
        </div>
      </Link>
      <div className="column is-12 my-0 py-0">
        <hr className="has-background-dark" />
      </div>
    </>
  );
};

import React from "react";

export const Home = () => {
  return (
    <div className="columns notification m-2 mt-6 is-warning is-light is-centered is-vcentered is-mobile is-box">
      <div className="column is-6 is-block mr-2">
        <p className="title is-size-3-touch is-size-1-desktop has-text-centered">
          Welcome to the Banking System
        </p>
        <hr className="has-background-warning" />
        <p className="content has-text-justified mt-6">
          Now using this Banking System you can just select a user and transfer
          any number of credits to them by your choice. You can also view the
          complete transaction history of all the users and the individuals.
        </p>
      </div>
      <div className="column is-5 is-block mr-3">
        <figure className="image is-4by3">
          <img
            className="has-ratio"
            src="https://images.unsplash.com/photo-1615818733733-8b2f0e3c403a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            alt="Banking System"
          />
        </figure>
      </div>
    </div>
  );
};

export default Home;

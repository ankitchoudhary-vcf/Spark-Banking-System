import React from "react";

export const About = () => {
  return (
    <>
      <div className="columns notification m-2 mt-6 is-warning is-light is-centered is-vcentered is-box">
        <div className="column is-6 is-block mr-2">
          <p className="title is-size-3-touch is-size-1-desktop has-text-centered">
            Basic Banking System
          </p>
          <hr className="has-background-warning" />
          <p className="content has-text-justified mt-6">
            It's a simple dynamic website which has the following specs. which
            do not have any login system and or any user creation but only
            having transfer of money between multiple users.
            <hr className="has-background-warning" />
            It' Work Flow is as follows: Home Page --{">"} View all Customers --{">"} Select and View one
            Customer --{">"} Transfer Money --{">"} Select customer to transfer to --{">"} View
            all Customers .
          </p>
        </div>
        <div className="column is-5 is-block mr-3">
          <figure className="image is-4by3">
            <img
              className="has-ratio"
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmFua3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60"
              alt="Banking System"
            />
          </figure>
        </div>
      </div>
    </>
  );
};

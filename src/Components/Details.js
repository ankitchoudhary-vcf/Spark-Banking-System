import React from "react";

export const Details = () => {
  return (
    <>
      <div className="column is-12">
        <div className="columns has-text-centered is-mobile p-0">
          <div className="column is-3">
            <h3 className="title is-size-5-touch is-size-3-desktop">101</h3>
          </div>
          <div className="column is-3">
            <h3 className="title is-size-5-touch is-size-3-desktop">
              Rahul Kumar
            </h3>
          </div>
          <div className="column is-3">
            <h3 className="title is-size-5-touch is-size-3-desktop">
              rahul@gmail.com
            </h3>
          </div>
          <div className="column is-3">
            <h3 className="title is-size-5-touch is-size-3-desktop">16,500</h3>
          </div>
        </div>
        <hr className="has-background-dark" />
      </div>
    </>
  );
};

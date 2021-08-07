import React from "react";

export const Statements = (props) => {
  return (
    <>
      <div className="column is-12">
        <div className="columns has-text-centered is-mobile p-0">
          <div className="column is-3">
            <h3 className="title is-size-5-touch is-size-3-desktop">
              {props.statements.Created_on}
            </h3>
          </div>
          <div className="column is-6">
            <h3 className="title is-size-5-touch is-size-3-desktop">
              Transferred to the account {props.statements.Credited_by} by the account {props.statements.Credited_by}
            </h3>
          </div>
          <div className="column is-3">
            <h3 className="title is-size-5-touch is-size-3-desktop">
                {props.statements.Amount}
            </h3>
          </div>
        </div>
        <hr className="has-background-dark" />
      </div>
    </>
  );
};

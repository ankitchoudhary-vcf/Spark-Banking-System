import React from 'react'
import { Statements } from './Statements'
 
export const TransactionHistory = () => {
    return (
        <>
      <div className="mt-6 notification mx-2 is-success is-light title has-text-centered">
        Transactions History
        <hr className="has-background-success" />
      </div>
      <div className="columns notification is-light mx-2 is-mobile is-multiline">
        <div className="column is-12">
          <div className="columns notification has-text-centered is-mobile is-dark p-0">
            <div className="column is-3">
              <h3 className="title is-size-5-touch is-size-3-desktop">
                Date
              </h3>
            </div>
            <div className="column is-3">
              <h3 className="title is-size-5-touch is-size-3-desktop">
                Description
              </h3>
            </div>
            <div className="column is-3">
              <h3 className="title is-size-5-touch is-size-3-desktop">
                Dr.
              </h3>
            </div>
            <div className="column is-3">
              <h3 className="title is-size-5-touch is-size-3-desktop">
                Cr.
              </h3>
            </div>
          </div>
          <hr className="has-background-dark"/>
          <hr className="has-background-dark"/>
        </div>

        <Statements />

      </div>
    </>
    )
}

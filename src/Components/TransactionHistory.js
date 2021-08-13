import React from "react";
import { Statements } from "./Statements";
import { BeatLoader } from "react-spinners";
import { useState, useEffect } from 'react';

export const TransactionHistory = (props) => {
    
    const [loading, setLoading] = useState(false);

    const [statements, setStatements] = useState([]);

    useEffect(() =>{

        function filteredStatements(data){
            return data.Status === "Credited"
        }

        async function Statements() {
            var filtered = await props.transactionDetails.filter(filteredStatements);
            setStatements(filtered);
            setLoading(true);
        }
        Statements()
    }, [props.transactionDetails]);

  return (
    <>
      <div className="mt-6 notification mx-2 is-success is-light title has-text-centered">
        Transactions History
        <hr className="has-background-success" />
      </div>
      <div className="columns notification is-light mx-2 is-mobile is-multiline" style={{justifyContent: 'center'}}>
        <div className="column is-12">
          <div className="columns notification has-text-centered is-mobile is-dark p-0">
            <div className="column is-3 px-0">
              <h3 className="title is-size-6-touch is-size-3-desktop">Date</h3>
            </div>
            <div className="column is-6 px-0">
              <h3 className="title is-size-6-touch is-size-3-desktop">
                Description
              </h3>
            </div>
            <div className="column is-3 px-0">
              <h3 className="title is-size-6-touch is-size-3-desktop">Amount</h3>
            </div>
          </div>
          <hr className="has-background-dark" />
          <hr className="has-background-dark" />
        </div>

        {!loading ? (
          <>
            <BeatLoader loading color="orange" size={72} />
          </>
        ):(
          statements.length === 0 ? (
            <div className="has-background-danger column is-12 has-text-centered title is-size-6-touch is-size-4-desktop">
              No Transaction Yet
            </div>
          ) : (
            statements.map((transactions) => {
              return <Statements key={transactions._id} statements={transactions} />
            })
          )
        )}

        
      </div>
    </>
  );
};

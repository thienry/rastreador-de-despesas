import React from "react";
import { useSelector } from "react-redux";

import Transaction from "../Transaction";
import "./transactionList.scss";

function Index() {
  const { transactions } = useSelector(state => state);

  return (
    <>
      <h3>Histórico</h3>
      <ul className="list">
        {transactions.map(trans => (
          <Transaction key={trans.id} trans={trans} />
        ))}
      </ul>
    </>
  );
}

export default Index;

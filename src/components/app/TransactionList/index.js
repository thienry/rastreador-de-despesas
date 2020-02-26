import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTransactions,
  deleteTransaction
} from "../../../actions/transactions";

import Transaction from "../Transaction";
import "./transactionList.scss";

function Index() {
  useEffect(() => {
    getTransactions();
  }, []);

  const { transactions } = useSelector(state => state);
  const dispatch = useDispatch();

  function onDelete() {
    return dispatch(deleteTransaction());
  }

  return (
    <>
      <h3>Histórico</h3>
      <ul className="list">
        {transactions.map(trans => (
          <Transaction key={trans.id} trans={trans} onDelete={onDelete} />
        ))}
      </ul>
    </>
  );
}

export default Index;

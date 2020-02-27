import React from "react";
import { useSelector } from "react-redux";

import "./incomeExpense.scss";

function Index() {
  const { transactions } = useSelector(state => state);

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

    const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Renda</h4>
        <p className="money plus">+R${income}</p>
      </div>
      <div>
        <h4>Despesa</h4>
        <p className="money minus">-R${expense}</p>
      </div>
    </div>
  );
}

export default Index;

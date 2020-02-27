import React from "react";
import { useSelector } from "react-redux";

function Index() {
  const { transactions } = useSelector(state => state);

  const amounts = transactions.map(trans => trans.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <h4>Suas Despesas</h4>
      <h1>R${total}</h1>
    </>
  );
}

export default Index;

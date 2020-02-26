import React from "react";

import "./transactionList.scss";

function index() {
  return (
    <>
      <h3>Histórico</h3>
      <ul className="list">
        <li className="minus">
          Dinheiro <span>-R$400,00</span>
          <button className="delete-btn">x</button>
        </li>
      </ul>
    </>
  );
}

export default index;

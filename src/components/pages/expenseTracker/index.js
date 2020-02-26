import React from "react";

import Balance from "../../app/Balance";
import IncomeExpense from "../../app/IncomeExpense";
import TransactionList from "../../app/TransactionList";
import AddTransaction from "../../app/Addtransaction";

import "./expenseTracker.scss";

function index() {
  return (
    <div className="container">
      <main>
        <div className="balance">
          <Balance />
          <IncomeExpense />
          <TransactionList />
        </div>
        <div className="form-transaction">
          <AddTransaction />
        </div>
      </main>
    </div>
  );
}

export default index;

import React from "react";
import { useDispatch } from "react-redux";
import { deleteTransaction } from "../../../actions/transactions";

function Index({ trans }) {
  const dispatch = useDispatch();

  const sign = trans.amount > 0 ? "+" : "-";

  return (
    <>
      <li className={trans.amount < 0 ? "minus" : "plus"}>
        {trans.text}
        <span>
          {sign} R${Math.abs(trans.amount)}
        </span>
        <button
          className="delete-btn"
          onClick={() => dispatch(deleteTransaction(trans.id))}
        >
          x
        </button>
      </li>
    </>
  );
}

export default Index;

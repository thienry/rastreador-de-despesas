import React from "react";

function Index({ trans, onDelete }) {
  const sign = trans.amount > 0 ? "+" : "-";

  return (
    <>
      <li className={trans.amount < 0 ? "minus" : "plus"}>
        {trans.text}
        <span>
          {sign} R${Math.abs(trans.amount)}
        </span>
        <button className="delete-btn" onClick={onDelete}>
          x
        </button>
      </li>
    </>
  );
}

export default Index;

import React, { useState } from "react";

import "./addTransaction.scss";

function Index() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  return (
    <>
      <h3 className="add-transaction">Adicionar Nova Transação</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Descrição:</label>
          <input
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Descreva a transação..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Valor: <br />
            (Negativo - despesa, Positivo - renda)
          </label>
          <input
            type="number"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            placeholder="Digite o valor..."
          />
        </div>
        <button className="btn">Adicionar Transação</button>
      </form>
    </>
  );
}

export default Index;

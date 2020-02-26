import React from "react";

import "./addTransaction.scss";

function index() {
  return (
    <>
      <h3 className="add-transaction">Adicionar Nova Transação</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Descrição</label>
          <input type="text" placeholder="Descreva a transação..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Montante <br />
            (Negativo - despesa, Positivo - renda)
          </label>
          <input type="number" placeholder="Digite o montante..." />
        </div>
        <button className="btn">Adicionar Transação</button>
      </form>
    </>
  );
}

export default index;

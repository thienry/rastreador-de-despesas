//import axios from "axios";
import { ADD_TRANSACTION, DELETE_TRANSACTION } from "./types";

/*
export async function getTransactions(dispatch) {
  try {
    const res = await axios.get("/transactions");

    if (res.status === 200) {
      dispatch({
        type: GET_TRANSACTIONS,
        payload: res.data
      });
    }
  } catch (error) {
    console.error(error);
  }
}

export async function addTransaction(dispatch) {
  try {
    const res = await axios.post("/transactions");

    if (res.status === 200) {
      dispatch({
        type: ADD_TRANSACTION,
        payload: res.data
      });
    }
  } catch (error) {
    console.error(error);
  }
}

export async function deleteTransaction(id, dispatch) {
  try {
    const res = await axios.delete(`/transactions/${id}`);

    if (res.status === 200) {
      dispatch({
        type: DELETE_TRANSACTION,
        payload: res.data
      });
    }
  } catch (error) {
    console.error(error);
  }
}
*/

export function addTransaction(transaction) {
  return {
    type: ADD_TRANSACTION,
    payload: transaction
  };
}

export function deleteTransaction(id) {
  return {
    type: DELETE_TRANSACTION,
    payload: id
  };
}

import {
  GET_TRANSACTIONS,
  ADD_TRANSACTION,
  DELETE_TRANSACTION
} from "../actions/types";

const initialState = [
  { id: 1, text: "Flower", amount: -20 },
  { id: 2, text: "Salary", amount: 250 },
  { id: 3, text: "Book", amount: -10 },
  { id: 4, text: "Camera", amount: 150 }
];

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload
      };

    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions]
      };

    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.filter(trans => trans.id !== action.payload)
      };

    default:
      return state;
  }
}

import {
  ADD_TRANSACTION,
  DELETE_TRANSACTION
} from "../actions/types";

const initialState = [{ id: 1, text: "thiago", amount: 1.0 }];

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [...state, action.payload]
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

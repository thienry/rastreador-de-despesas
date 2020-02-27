import { ADD_TRANSACTION, DELETE_TRANSACTION } from "../actions/types";

const initialState = [];

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_TRANSACTION:
      return [payload, ...state];

    case DELETE_TRANSACTION:
      return state.filter(trans => trans.id !== payload);

    default:
      return state;
  }
}

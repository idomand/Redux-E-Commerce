import { ActionTypes } from "../Constants/actionsTypes";

const initialState = {
  products: [{ id: 1, title: "ido", category: "developer" }],
};
export const productReducer = (state, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCT:
      return state;

    default:
      return state;
  }
};

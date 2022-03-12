import { ActionTypes } from "../Constants/actionsTypes";

const initialState = {
  products: [],
};

export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCT:
      return { ...state, products: payload };

    default:
      return state;
  }
};

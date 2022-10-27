import * as types from "src/store/config/cart";

export const setShoppingCart = (payload: any) => ({
  type: types.SHOPPINGCART,
  payload,
});

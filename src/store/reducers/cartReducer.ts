import * as types from "src/store/config/cart";

const initialState = {
  cartItems: [],
  tab: "",
  filterCheckbox: [],
  checkbox: [],
  selection: [],
  selectionData: [],
  filters: {
    search: "",
  },
  pagination: {
    page: 1,
    limit: 10,
  },
  sort: {
    sort: "",
    order: "",
  },
  searchText: "",
};

const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.SHOPPINGCART:
      return { ...initialState, cartItems: action?.payload };
    default:
      return state;
  }
};

export default cartReducer;

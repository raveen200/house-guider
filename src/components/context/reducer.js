export const actionTypes = {
  SET_USER: "SET_USER",
  SET_ITEMS: "SET_ITEMS",
};

const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionTypes.SET_ITEMS:
      return {
        ...state,
        items: action.items,
      };

    default:
      return state;
  }
};

export default reducer;

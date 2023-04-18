export const actionTypes = {
  SET_USER: "SET_USER",
  SET_ITEMS: "SET_ITEMS",
  SET_USERS: "SET_USERS",
  SET_RESERVATIONS: "SET_RESERVATIONS",
};

const reducer = (state, action) => {
    console.log(action);
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
    case actionTypes.SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case actionTypes.SET_RESERVATIONS:
      return {
        ...state,
        reservations: action.reservations,
      };


    default:
      return state;
  }
};

export default reducer;

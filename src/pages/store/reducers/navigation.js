import { getCurrentFields } from "../actions/Fields/actions";

const initialState = {
  client_Navigation: 0,
  administrator_Navigation: 0,
  general_Navigation: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVE_ADMIN_NAV:
      return { ...state, administratorNavigation: 1 };
    case ACTIVE_CLIENT_NAV:
      return { ...state, clientNavigation: 1 };
    case ACTIVE_GENERAL_NAV:
      return { ...state, generalNavigation: 1 };
    default:
      return state;
  }
};

export default reducer;

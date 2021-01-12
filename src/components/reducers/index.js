import {REQUEST, SUCCESS, ERROR} from "../constants"

const initialState = {
  exchangeRates: [],
  loading: true,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case SUCCESS:
      return {
        ...state,
        exchangeRates: action.payload,
        loading: false,
        error: false,
      };
    case ERROR:
      return {
        ...state,
        exchangeRates: [],
        loading: false,
        error: true,
      };
      default:
          return state;
  }
};

export default reducer;
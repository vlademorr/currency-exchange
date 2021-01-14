import {
  REQUEST, 
  SUCCESS, 
  ERROR, 
  DUFAULT, 
  EXCHANGE,
  FAVORITE
} from "../../components/constants";

const initialState = {
  exchangeRates: [],
  baseCurrency: {currency: "USD"},
  exchangeCurrency: {currency: "RUB"},
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
        exchangeCurrency: action.payload[13],
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
      case DUFAULT:
      return {
        ...state,
        baseCurrency: action.payload
      };
      case EXCHANGE:
      return {
        ...state,
        exchangeCurrency: action.payload
      };
      case FAVORITE:
      state.exchangeRates.forEach((item) => {
        if (item.currency === action.payload) {
          item.favorite = !item.favorite
        }
      })
      return {
        ...state,
        exchangeRates: [...state.exchangeRates]
      };
      default:
          return state;
  }
};

export default reducer;
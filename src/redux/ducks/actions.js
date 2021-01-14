import {
  REQUEST, 
  SUCCESS, 
  ERROR, 
  FETCH, 
  DUFAULT, 
  EXCHANGE,
  FAVORITE
} from "../../components/constants";

const requestExchangeRates = () => {
  return { 
    type: REQUEST
  }
};

const requestExchangeRatesSuccess  = (data) =>{
  return { 
    type: SUCCESS,
    payload: data
  }
};

const requestExchangeRatesError  = () =>{
  return { 
    type: ERROR
  }
};

const fetchExchangeRates = (baseCurrency) => {
  return { 
    type: FETCH,
    payload: baseCurrency
  }
};

const changeDefaultCurrency = (defaultCurrency) => {
  return {
    type: DUFAULT,
    payload: defaultCurrency
  }
};
const changeExchangeCurrency = (exchangeCurrency) => {
  return {
    type: EXCHANGE,
    payload: exchangeCurrency
  }
};

const favoriteCurrency = (currency) => {
  return {
    type: FAVORITE,
    payload: currency
  }
}
export{
  requestExchangeRates,
  requestExchangeRatesSuccess,
  requestExchangeRatesError,
  fetchExchangeRates,
  changeDefaultCurrency,
  changeExchangeCurrency,
  favoriteCurrency
};
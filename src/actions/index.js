import {REQUEST, SUCCESS, ERROR, FETCH} from "../components/constants"

const requestExchangeRates = () => {
  return { 
    type: REQUEST
  }
}

const requestExchangeRatesSuccess  = (data) =>{
  return { 
    type: SUCCESS,
    payload: data
  }
}

const requestExchangeRatesError  = () =>{
  return { 
    type: ERROR
  }
}

const fetchExchangeRates = () => {
  return { 
    type: FETCH
  }
};

export{
  requestExchangeRates,
  requestExchangeRatesSuccess,
  requestExchangeRatesError,
  fetchExchangeRates
}
const setCurrency = (currency) => {
  return (dispatch) => {
    dispatch({
      type: 'SET_CURRENCY',
      currency
    });

    dispatch(fetchData(currency));
  }
}

const setData = (data) => {
  return {
    type: 'SET_DATA',
    data
  }
}

const fetchData = (currency='USD') => {
  return (dispatch) => {
    fetch(`https://api.coinmarketcap.com/v1/ticker/?convert=${currency}`).then(res => res.json()).then((data) => {
      dispatch(setData(data));
    })
  }
}

const addCoin = (coin, amount) => {
  return {
    type: 'ADD_COIN',
    coin,
    amount
  }
}

const removeCoin = (coin) => {
  return {
    type: 'REMOVE_COIN',
    coin,
  }
}


const changeCoinAmount = (coin, amount) => {
  return {
    type: 'CHANGE_COIN_AMOUNT',
    coin,
    amount
  }
}

const importCoins = (coins) => {
  return {
    type: 'IMPORT_COINS',
    coins
  }
}

const setScanning = (scanning) => {
  return {
    type: 'SET_SCANNING',
    scanning
  }
}

const setPage = (page) => {
  return {
    type: 'SET_PAGE',
    page
  }
}

export { setCurrency, fetchData, addCoin, changeCoinAmount, removeCoin, importCoins, setScanning, setPage };

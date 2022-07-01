import {TickerItemInterface} from './../screener-item/items.interface';
export const LoadScreenerData = (_state: any, _setState: any) => {
  _setState({..._state, loading: true});
  fetch(
    'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD&page=0',
  )
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(data => {
      onSuccess(data, _state, _setState);
    })
    .catch(error => {
      console.log(error);
      _setState({..._state, loading: false});
    });
};

const onSuccess = (response: any, state: any, setState: any) => {
  const data: TickerItemInterface[] = [];
  response.Data?.forEach(item => {
    item.RAW
      ? data.push({
          symbol: item.CoinInfo.Name,
          name: item.CoinInfo.FullName,
          price: item.RAW.USD.PRICE,
          change: item.RAW.USD.CHANGEPCTDAY,
        })
      : '';
  });
  setState({...state, tokenList: data, loading: false});
};

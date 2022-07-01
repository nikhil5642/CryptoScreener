import React, {useEffect, useState} from 'react';
import {FlatList, RefreshControl, SafeAreaView, View} from 'react-native';
import {HeaderItem} from '../screener-item/header-item';
import {TickerItem} from '../screener-item/ticker-item';
import {init} from './screener.init';
import {styles} from './screener.style';
import {LoadScreenerData} from './screener.utils';

export const ScreenerView = () => {
  const [state, setState] = useState(init());
  const [sortedState, setSortedState] = useState('');
  const sort = (key: string) => {
    setSortedState(key);
    sortList();
  };
  const sortList = () => {
    setState({
      ...state,
      tokenList: state.tokenList.sort((a, b) => {
        if (sortedState === 'Change%') {
          return a.change - b.change;
        } else if (sortedState === 'Price') {
          return b.price - a.price;
        } else if (sortedState === 'Name') {
          return a.name > b.name ? 1 : -1;
        } else {
          return 0;
        }
      }),
    });
  };

  const refresh = () => {
    LoadScreenerData(state, setState);
  };

  useEffect(() => {
    sortList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortedState, state.loading]);

  useEffect(() => {
    LoadScreenerData(state, setState);
    const interval = setInterval(() => {
      LoadScreenerData(state, setState);
    }, 5000);

    return () => clearInterval(interval);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={state.tokenList}
        renderItem={item => TickerItem(item.item)}
        keyExtractor={item => item.symbol}
        refreshControl={
          <RefreshControl refreshing={state.loading} onRefresh={refresh} />
        }
        ListHeaderComponent={
          <View style={styles.headerContainer}>
            <HeaderItem
              title={'Name'}
              onClick={sort}
              style={{flex: 2, paddingLeft: 12}}
            />
            <HeaderItem
              title={'Price'}
              onClick={sort}
              style={{flex: 1, paddingLeft: 12}}
            />
            <HeaderItem
              title={'Change%'}
              onClick={sort}
              style={{flex: 1, paddingLeft: 12}}
            />
          </View>
        }
      />
    </SafeAreaView>
  );
};

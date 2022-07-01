import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TickerItemInterface} from './items.interface';

export const TickerItem = (props: TickerItemInterface) => {
  const change = Number(props.change.toFixed(2));
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={styles.name}>
          {props.name} ({props.symbol})
        </Text>
        <Text style={styles.price}>$ {Number(props.price.toFixed(2))}</Text>
        <Text style={[styles.change, {color: change > 0 ? 'green' : 'red'}]}>
          {change} %
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightGrey',
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 12,
    marginVertical: 2,
    marginHorizontal: 4,
    backgroundColor: 'white',
  },
  name: {
    flex: 2.5,
    paddingHorizontal: 8,
    fontSize: 12,
    fontWeight: '600',
    fontColor: 'black',
    textAlignVertical: 'center',
  },

  price: {
    flex: 1,
    fontSize: 12,
    fontColor: 'black',
  },
  change: {
    flex: 1,
    fontSize: 12,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    textAlign: 'right',
    paddingHorizontal: 16,
  },
  line: {
    flex: 1,
    height: 0.2,
    marginHorizontal: 8,
    backgroundColor: 'black',
  },
});

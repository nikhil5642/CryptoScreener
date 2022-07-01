import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {HeaderItemInterface} from './items.interface';

export const HeaderItem = ({title, style, onClick}: HeaderItemInterface) => {
  return (
    <Pressable style={[styles.container, style]} onPress={() => onClick(title)}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
});

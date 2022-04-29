import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Gap, Header} from '../../components';

const Cart = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Shopping Cart" />
      <View style={styles.contentWrapper}>
        <Text>test</Text>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 52,
    marginTop: 24,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  text: {
    color: '#676767',
    fontSize: 24,
    fontFamily: 'Poppins-Medium',
    paddingHorizontal: 20,
  },
  text1: {
    color: '#676767',
    fontSize: 20,
    fontFamily: 'Poppins-Reguler',
  },
});

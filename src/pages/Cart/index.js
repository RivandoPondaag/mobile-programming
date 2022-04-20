import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header} from '../../components';

const Cart = ({navigation}) => {
  return (
    <View>
      <Header title="Cart" onBack={() => navigation.goBack()} />
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});

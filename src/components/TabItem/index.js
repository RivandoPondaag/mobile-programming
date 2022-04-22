import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {WARNA_UTAMA, WARNA_DISABLE} from '../../utils/constant';
import {
  Home_active,
  Home_not_active,
  Cart_active,
  Cart_not_active,
  History_active,
  History_not_active,
  About_active,
  About_not_active,
} from '../../assets/';

const TabItem = ({isFocused, onPress, onLongPress, label}) => {
  const Icon = () => {
    if (label === 'Home')
      return isFocused ? <Home_active /> : <Home_not_active />;

    if (label === 'Cart')
      return isFocused ? <Cart_active /> : <Cart_not_active />;

    if (label === 'History')
      return isFocused ? <History_active /> : <History_not_active />;

    if (label === 'About')
      return isFocused ? <About_active style={styles.gambar} /> : <About_not_active style={styles.gambar}/>;

    return <Home_active />;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.Text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  gambar : {
    paddingTop: 32,
  },
  Text: isFocused => ({
    color: isFocused ? WARNA_UTAMA : WARNA_DISABLE,
  }),
});
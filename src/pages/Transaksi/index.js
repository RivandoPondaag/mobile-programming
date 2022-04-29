import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header} from '../../components';

const Transaksi = () => {
  return (
    <View style={styles.page}>
      <Header title="Transaksi" />
      <View style={styles.container}>
        <Text>Page Transaksi</Text>
      </View>
    </View>
  );
};

export default Transaksi;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingTop: 10,
    marginTop: 24,
  },
});
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header} from '../../components';

const MyAccount = ({navigation}) => {
  return (
    <View>
      <Header title="My Account" onBack={() => navigation.goBack()} />
    </View>
  );
};

export default MyAccount;

const styles = StyleSheet.create({});
